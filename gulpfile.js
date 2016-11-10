var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var minifyCss = require('gulp-clean-css')
var sourceMaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var imageMin = require('gulp-imagemin');
var handlebars = require('gulp-compile-handlebars');
var rename = require('gulp-rename');
var less = require('gulp-less');
var scss = require('gulp-scss');

gulp.task('default', ['styles', 'images', 'scripts', 'templates'],function(){
  browserSync.init({
    server: './',
    browser: ['google chrome']
  });
  gulp.watch('src/styles/**/*.scss', ['styles']);
  gulp.watch('src/scripts/**/*.js', ['scripts']);
  gulp.watch('src/img/**/*', ['images']);
  gulp.watch('src/templates/**/*.hbs', ['templates']);
  gulp.watch('*.html', browserSync.reload);
});

gulp.task('templates', function(){
  var data = {};
  var options = {
    batch: ['src/templates/partials']
  }
    return gulp.src(['src/templates/**/*.hbs', '!src/templates/partials/**.hbs'])
      .pipe(handlebars(data, options))
      .pipe(rename(function(path) {
        path.extname = '.html'
      }))
      .pipe(gulp.dest('./dist'));
});

gulp.task('images', function(){
    gulp.src(['src/img/**/*'])
      .pipe(imageMin())
      .pipe(gulp.dest('dist/img'))
      .pipe(browserSync.stream());
});

gulp.task('scripts', function(){
  gulp.src(['src/scripts/main.js'])
    .pipe(sourceMaps.init())
    .pipe(uglify())
    .pipe(sourceMaps.write())
    .pipe(gulp.dest('dist/scripts'))
    .pipe(browserSync.stream());
});

gulp.task('styles', function() {
  //gulp.src(['src/styles/**/*.less'])
  gulp.src(['src/styles/**/*.scss'])
    .pipe(sourceMaps.init())
    //.pipe(less())
    .pipe(scss())
    .pipe(minifyCss())
    .pipe(sourceMaps.write())
    .pipe(gulp.dest('dist/styles'))
    .pipe(browserSync.stream());
});
