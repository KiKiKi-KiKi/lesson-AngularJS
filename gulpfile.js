var gulp        = require('gulp'),
    webserver   = require('gulp-webserver'),
    browserSync = require('browser-sync'),
    nodemon     = require('gulp-nodemon');

var app = 'todo_app/app.js';

gulp.task('nodemon', function(cb) {
  var called = false;
  nodemon({
    script: app,
    env: {
      'NODE_ENV': 'development',
    },
    ext: 'js',
    ignore: ['./todo_app/views/', 'node_modules'],
    stdout: false
  })
  .on('start', function() {
    console.log('>>> start', called);
    if(!called) {
      called = true;
      cb();
    }
  })
  .on('readable', function() {
    console.log('>>> readable');
  })
  .on('restart', function() {
    console.log('>>> restart');
    setTimeout(function() {
      browserSync.reload({stream: true})
    }, 500);
  });
});

// reload
gulp.task('reload', function() {
  return gulp.src('./todo_app')
    .pipe( browserSync.reload({stream: true, once: true}) );
});

gulp.task('webserver', ['nodemon'], function() {
  browserSync.init(null, {
    proxy: 'http://localhost:3000',
    port: 7000,
    open: false
  });
});

/*
gulp.task('webserver', ['nodemon'], function() {
  gulp.src('./todo_app')
    .pipe(webserver({
      livereload: true,
      port: 3000
    }));
});
*/

gulp.task('default', ['webserver'], function() {
  gulp.watch('todo_app/views/**', ['reload'])
});
