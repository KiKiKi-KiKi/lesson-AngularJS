var express = require('express'),
    path    = require('path'),
    logger  = require('morgan'),
    bodyParser = require('body-parser'),
    stylus  = require('stylus'),
    nib     = require('nib'),
    app     = express(),
    router  = require('./routes/app');

// log
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// use jade Template
app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'jade');

// use stylus
app.use(stylus.middleware({
  src: __dirname + '/views',
  dest: __dirname + '/assets',
  compile: function compile(src, path) {
    return stylus(src)
     .set('filename', path)
     .set('compress', true)
     .use(nib())
     .import('nib');
  }
}));

// set static file dir
app.use('/assets', express.static(__dirname + '/assets'));

// Routing
app.get('/', router.index);

// Error
app.use(function(err, req, res, next) {
  console.log('>> ERROR >>', err);
  res.status(err.status || 500);
  res.send(err.message);
});
app.listen(3000);
