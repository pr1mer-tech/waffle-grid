const gulp = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

gulp.task('sass:compile', function () {
  return gulp.src('./src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./src/**/*.scss', ['sass']);
});

gulp.task('css:minify', function() {
  return gulp.src('dist/waffle-grid.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename('waffle-grid.min.css'))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['sass:compile', 'css:minify'])
