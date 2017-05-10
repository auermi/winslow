var gulp = require('gulp');
var sass = require('gulp-sass');
var csso = require('gulp-csso');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

gulp.task('css', function(){
  return gulp.src('assets/sass/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(csso())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('assets/css'))
});

gulp.task('js', () => {
  return gulp.src('assets/js/application.js')
    .pipe(uglify())
    .pipe(rename('application.min.js'))
    .pipe(gulp.dest('assets/js'))
})

gulp.watch('assets/sass/*.scss', ['css']).on('change', (e) => {
  console.log('File ' + e.path + ' was ' + e.type + ', transpiling Sass files...')
});

gulp.watch('assets/js/*.js', ['js']).on('change', (e) => {
  console.log('File ' + e.path + ' was ' + e.type + ', minifying javascript files...')
});

gulp.task('default', ['css', 'js'], () => {
  console.log('\n\n===\n\nGulp is Running 🥃\n\n==\n\n')
});
