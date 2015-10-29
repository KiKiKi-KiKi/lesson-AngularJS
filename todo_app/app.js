var express = require('express'),
    path    = require('path'),
    logger  = require('morgan'),
    app     = express(),
    router  = require('./routes/app');

// use jade Template
app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'jade');
// log
app.use(logger('dev'));

// Routing
app.get('/', router.index);

// Error
app.use(function(err, req, res, next) {
  console.log('>> ERROR >>', err);
  res.status(err.status || 500);
  res.send(err.message);
});
app.listen(3000);
