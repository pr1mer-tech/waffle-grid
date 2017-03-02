const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
const cssbeautify = require('gulp-cssbeautify');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('sass:compile', function () {
  return gulp.src('./src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS({
      level: {
        1: {
          all: true // controls all properties
        },
        2: {
          all: true,
          mergeNonAdjacentByBody: true
        }
      }
    })) // This moight seem counter intuitive at first, that we first uglify then beautify, but the uglification drastically reduces file size by merging col-1-of-4, col-2-of-8 and col-3-of-12 ito one same rule. The beautyfication makes the code readable. This reduces the non-minified file size by ~200 lines.
    .pipe(cssbeautify({
      indent: '  ',
      autosemicolon: true
    }))
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
