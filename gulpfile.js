var gulp        = require('gulp');
var connect     = require('gulp-connect');
var imagemin    = require('gulp-imagemin');
var sass        = require('gulp-sass');
var browserSync = require('browser-sync').create();
var header      = require('gulp-header');
var cleanCSS    = require('gulp-clean-css');
var rename      = require("gulp-rename");
var uglify      = require('gulp-uglify');
var pkg         = require('./package.json');

// Set the banner content
var banner = ['/*!\n',
  ' * Nelson Mfinda - <%= pkg.title %> v<%= pkg.version %> (<%= pkg.homepage %>)\n',
  ' * Copyright ' + (new Date()).getFullYear(), ' <%= pkg.author %>\n',
  ' * Licensed under <%= pkg.license %> (https://github.com/nelsonmfinda/<%= pkg.name %>/blob/master/LICENSE)\n',
  ' */\n',
  ''
].join('');

// Start a development webserver.
gulp.task('webserver', function () {
    connect.server({
        livereload: true,
        root: '.'
    });
});

// Compiles SCSS files from /scss into /css
gulp.task('sass', function() {
  return gulp.src('src/sass/main.scss')
    .pipe(sass())
    .pipe(header(banner, {
      pkg: pkg
    }))
    .pipe(gulp.dest('assets/css/'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

// Minify compiled CSS
gulp.task('minify-css', ['sass'], function() {
  return gulp.src('assets/css/main.css')
    .pipe(cleanCSS({
      compatibility: 'ie8'
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('assets/css/'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

// Minify image
gulp.task('imagemin', function () {
    gulp.src('assets/images/**/*{.png,.jpg,.jpeg,.gif,.svg}')
        .pipe(imagemin({
            interlaced: true,
            progressive: true,
            optimizationLevel: 5
        }))
        .pipe(gulp.dest('assets/images/'))
});

// Minify custom JS
gulp.task('minify-js', function() {
  return gulp.src('assets/js/main.js')
    .pipe(uglify())
    .pipe(header(banner, {
      pkg: pkg
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('assets/js/'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

// Copy vendor files from /node_modules into /vendor
// NOTE: requires `npm install` before running!
gulp.task('copy', function() {
  gulp.src([
      'node_modules/bootstrap/dist/css/bootstrap.min.css'])
    .pipe(gulp.dest('assets/css/bootstrap'))

  gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js'])
    .pipe(gulp.dest('assets/js/'))

  gulp.src(['node_modules/jquery/dist/jquery.js', 'node_modules/jquery/dist/jquery.min.js'])
    .pipe(gulp.dest('assets/js/'))

  gulp.src(['node_modules/popper.js/dist/umd/popper.js', 'node_modules/popper.js/dist/umd/popper.min.js'])
    .pipe(gulp.dest('assets/js/vendor/'))

  gulp.src(['node_modules/jquery.easing/*.js'])
    .pipe(gulp.dest('assets/js/vendor/'))

})

// Default task
gulp.task('default', ['sass', 'minify-css', 'minify-js', 'copy', 'imagemin', 'webserver']);

// Configure the browserSync task
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: ''
    },
  })
})

// Dev task with browserSync
gulp.task('dev', ['browserSync', 'sass', 'minify-css', 'minify-js'], function() {
  gulp.watch('src/sass/*.scss', ['sass']);
  gulp.watch('assets/css/*.css', ['minify-css']);
  gulp.watch('js/*.js', ['minify-js']);
  // Reloads the browser whenever HTML or JS files change
  gulp.watch('*.html', browserSync.reload);
  gulp.watch('js/**/*.js', browserSync.reload);
  connect.reload();
});
