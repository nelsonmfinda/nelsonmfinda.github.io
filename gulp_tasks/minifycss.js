const config    = require('../frasco.config.js');
const cleanCSS  = require('gulp-clean-css');
const gulp      = require('gulp');
const rename    = require("gulp-rename");

// Minify compiled CSS
gulp.task('minifycss', function() {
  return gulp.src(config.assets + '/' + config.minifycss.src + '/main.css')
    .pipe(cleanCSS({
      compatibility: config.minifycss.compatibility
    }))
    .pipe(rename({
      suffix: config.minifycss.suffix
    }))
    .pipe(gulp.dest(config.assets + '/' + config.minifycss.dest + '/'))
});