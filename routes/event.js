const db    = require('../config/db');
var express = require('express');
var router  = express.Router();

function DateTime(){
    var today    = new Date(),
        date     = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate(),
        time     = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(),
        dateTime = date+' '+time;
    return dateTime;
}

///////// GET //////////////

/* GET http://localhost:3000/event/test */
router.get('/test', function(req, res, next) {
    res.render('index', { title: 'Event 123'});
});

/* GET http://localhost:3000/event/ */
router.get('/', function(req, res, next) {
    var qry  = "SELECT * FROM app_event WHERE delete_flg=0 ORDER BY id ASC",
        resp = { "success": false };
    db.any(qry, [true])
    .then(function(data){//success
        if (data.rowCount != 0) {
            res.render('event/list',{title: "Event", data: data});
        }
    })
    .catch(function(error) {//error
        res.status(400).send(error);
    })
});

/* GET http://localhost:3000/event/add */
router.get('/add', function(req, res, next) {
    res.render("event/add", { title: "Add Event" });
});

/* GET http://localhost:3000/event/edit/:id */
router.get('/edit/:id', function(req, res, next) {
    var resp = { "success": false },
        id   = req.params.id,
        qry  = "SELECT * FROM app_event WHERE id='"+id+ "' ";
    db.any(qry, [id])
    .then(function(data){//success
        if (data.rowCount != 0) {
            res.render("event/edit", { title: "Edit Event", data: data[0]});
        }
    })
    .catch(function(error) {//error
        res.status(400).send(error);
    })
});

/* GET http://localhost:3000/event/delete/:id */
router.get('/delete/:id', function(req, res, next) {
    var id   = req.params.id,
        resp = { "success": false },
        qry  = "UPDATE app_event SET delete_flg=1 WHERE id='"+id+ "' ";
    db.any(qry, [id])
    .then(function(data){//success
        res.redirect("/event");
    })
    .catch(function(error) {//error
        res.status(400).send(error);
    })
});

///////// POST ////////////

/* POSt http://localhost:3000/event/add (SAVE)*/ 
router.post('/add', function(req, res, next) {
    var qry  = "INSERT INTO app_event(event_name,event_type) VALUES('"+ req.body.event_name + "','" + req.body.event_type +"')",
        resp = { "success": false };
    db.any(qry, [true])
    .then(function(data){//success
        return res.redirect("/event");
    })
    .catch(function(error) {//error
        res.status(400).send(error);
    })
});

/* POSt http://localhost:3000/event/edit/:id (UPDATE)*/ 
router.post('/edit/:id', function(req, res, next) {
    var qry  = "UPDATE app_event SET event_name='"+ req.body.event_name + "', event_type='" + req.body.event_type +"', update_datetime='" + DateTime() + "' WHERE id='" + req.body.id + "'",
        resp = { "success": false },
        id   = req.params.id;
    db.any(qry, [true])
    .then(function(data){//success
        return res.redirect("/event");
    })
    .catch(function(error) {//error
        res.status(400).send(error);
    })
});

module.exports = router;