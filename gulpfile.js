var nunjucksRender = require('gulp-nunjucks-render');
var gulp = require('gulp'); 

function defaultTask(cb) {
    // place code for your default task here
    cb();
  }
  
gulp.task('nunjucks', function() {
  // Gets .html and .nunjucks files in pages
  return gulp.src('app/pages/**/*.+(html|nunjucks)')
  // Renders template with nunjucks
  .pipe(nunjucksRender({
      path: ['app/templates']
    }))
  // output files in app folder
  .pipe(gulp.dest('app'))
});

exports.default = defaultTask