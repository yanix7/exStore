const {task, src, dest, series, watch} = require('gulp');
const sass   = require('gulp-sass')(require ('sass'));
const browserSync = require('browser-sync').create();

const paths = {
  styles: {
    src: 'app/scss/*.scss',
    dest: 'app/css',
  }
};


task('sass', () => {
  return src(paths.styles.src)
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(dest(paths.styles.dest))
    .pipe(browserSync.stream());
});

task('serve', series('sass', () => {
  browserSync.init({
    server: "app"
  });

  watch(paths.styles.src, series('sass'));
}));

task('default', series('serve'));
