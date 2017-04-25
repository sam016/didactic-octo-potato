let gulp = require('gulp');
let nodemon = require('gulp-nodemon');

gulp.task('serve:api', () => {
  return nodemon({
    script: 'server.js',
    ext: 'js',
    watch: ['server'],
    env: {
      'NODE_ENV': 'development'
    }
  })
});
