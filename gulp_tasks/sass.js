const autoprefixer 	= require('autoprefixer');
const config       	= require('../frasco.config.js');
const pkg 			    = require('../package.json');
const gulp         	= require('gulp');
const postcss      	= require('gulp-postcss');
const sass         	= require('gulp-sass');
const header 		    = require('gulp-header');

// Set the banner content
const banner = ['/*!\n',
  ' * Nelson Mfinda - <%= pkg.title %> v<%= pkg.version %> (<%= pkg.homepage %>)\n',
  ' * Copyright 2018 - ' + (new Date()).getFullYear(), ' <%= pkg.author %>\n',
  ' * Licensed under <%= pkg.license %> (https://github.com/nelsonmfinda/<%= pkg.name %>/blob/master/LICENSE)\n',
  ' */\n',
  ''
].join('');

gulp.task('sass', function () {
  return gulp.src(config.assets + '/' + config.sass.src + '/**/*')
    .pipe(sass({outputStyle: config.sass.outputStyle}).on('error', sass.logError))
    .pipe(header(banner, {
      pkg: pkg
    }))
    .pipe(postcss([
      autoprefixer({
        browsers: config.sass.autoprefixer.browsers
      })
    ]))
    .pipe(gulp.dest(config.assets + '/' + config.sass.dest));
});
