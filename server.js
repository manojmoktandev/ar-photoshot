var createError   = require('http-errors');
var express       = require('express');
var path          = require('path');
var cookieParser  = require('cookie-parser');
var bodyParser    = require('body-parser');
var logger        = require('morgan');

var indexRouter               = require('./routes/index');
var usersRouter               = require('./routes/users');
var deviceRouter              = require('./routes/device');
var eventRouter               = require('./routes/event');
var eventDeviceRouter         = require('./routes/eventDevice');
var eventTemplateRouter       = require('./routes/eventTemplate');
var eventTemplateDeviceRouter = require('./routes/eventTemplateDevice');

var db            = require('./config/db');
var app           = express();
var http          = require('http').Server(app);
var io            = require('socket.io')(http);
var serverPort    = process.env.PORT || 3000;
var websocketPort = process.env.PORT || 3001;

// view engine setup
app.engine('ejs', require('express-ejs-extend'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/device', deviceRouter);
app.use('/event', eventRouter);
app.use('/eventDevice', eventDeviceRouter);
app.use('/eventTemplate', eventTemplateRouter);
app.use('/eventTemplateDevice', eventTemplateDeviceRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

// socket  connection
io.on('connection', function(socket) {
    console.log('Photo Shot connection OK ');
    db.func('version')
    .then(data => {//success
        console.log('Database connected');
    })
    .catch(error => {//error
        console.log('Database Connectin Failed',error);
    });
    socket.on('mobileClick', function(data) {
        //Send message to everyone
        io.sockets.emit('setSelectedDesktopImage', data);
    });
    socket.on('start', function() {
        io.sockets.emit('start');
    })
    socket.on('select', function() {
        io.sockets.emit('select');
    })
    socket.on('desktopClick', function(data) {
        //Send message to everyone
        io.sockets.emit('setSelectedMobileImage', data);
    })
});

app.listen(serverPort, function() {
    console.log("Node server is listening on port %d", serverPort);
});
http.listen(websocketPort, function() {
    console.log("WebSocket listening on port %d", websocketPort);
});

module.exports = app;