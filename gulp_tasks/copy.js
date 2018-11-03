const gulp      	= require('gulp');
const config       	= require('../frasco.config.js');


// Copy vendor files from /node_modules into /vendor
// NOTE: requires `npm install` before running!
gulp.task('copy', function() {
  gulp.src([
      'node_modules/bootstrap/dist/css/bootstrap.min.css',
    ])
    .pipe(gulp.dest(config.assets + '/' + 'css/vendor/'))

  gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js'])
    .pipe(gulp.dest(config.assets + '/' + 'js/vendor/'))

  gulp.src(['node_modules/jquery/dist/jquery.min.js'])
    .pipe(gulp.dest(config.assets + '/' + 'js/vendor/'))

  gulp.src(['node_modules/popper.js/dist/umd/popper.min.js'])
    .pipe(gulp.dest(config.assets + '/' + 'js/vendor/'))

  gulp.src(['node_modules/jquery.easing/*min.js'])
    .pipe(gulp.dest(config.assets + '/' + 'js/vendor/'))

  /*gulp.src([
      'node_modules/font-awesome/css/*.min.css',  
    ])
    .pipe(gulp.dest(config.assets + '/' + 'fonts/vendor/font-awesome/css'))

  gulp.src([
      'node_modules/font-awesome/fonts/*',  
    ])
    .pipe(gulp.dest(config.assets + '/' + 'fonts/vendor/font-awesome/fonts'))*/

})