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

/* GET http://localhost:3000/eventTemplateDevice/test */
router.get('/test', function(req, res, next) {
	res.render('index', { title: 'Event Template Device 123'});
});

/* GET http://localhost:3000/eventTemplateDevice/ */
router.get('/', function(req, res, next) {
    var qry  = "SELECT * FROM app_event_template_device WHERE delete_flg=0 ORDER BY id ASC",
        resp = { "success": false };
    db.any(qry, [true])
    .then(function(data){//success
        if (data.rowCount != 0) {
            res.render('eventTemplateDevice/list',{title: "Event Template Device", data: data});
        }
    })
    .catch(function(error) {//error
        res.status(400).send(error);
    })
});

/* GET http://localhost:3000/eventTemplateDevice/add */
router.get('/add', function(req, res, next) {
    res.render("eventTemplateDevice/add", { title: "Add Event Template Device" });
});

/* GET http://localhost:3000/eventTemplateDevice/edit/:id */
router.get('/edit/:id', function(req, res, next) {
    var resp = { "success": false },
        id   = req.params.id,
        qry  = "SELECT * FROM app_event_template_device WHERE id='"+id+ "' ";
    db.any(qry, [id])
    .then(function(data){//success
        if (data.rowCount != 0) {
            res.render("eventTemplateDevice/edit", { title: "Edit Event Template Device", data: data[0]});
        }
    })
    .catch(function(error) {//error
        res.status(400).send(error);
    })
});

/* GET http://localhost:3000/eventTemplateDevice/delete/:id */
router.get('/delete/:id', function(req, res, next) {
    var id   = req.params.id,
        resp = { "success": false },
        qry  = "UPDATE app_event_template_device SET delete_flg=1 WHERE id='"+id+ "' ";
    db.any(qry, [id])
    .then(function(data){//success
        res.redirect("/eventTemplateDevice");
    })
    .catch(function(error) {//error
        res.status(400).send(error);
    })
});

///////// POST ////////////

/* POSt http://localhost:3000/eventTemplateDevice/add (SAVE)*/ 
router.post('/add', function(req, res, next) {
    var qry  = "INSERT INTO app_event_template_device(event_template_id, event_device_id, event_template_device_name) VALUES('"+ req.body.event_template_id + "','" + req.body.event_device_id + "','" + req.body.event_template_device_name +"')",
        resp = { "success": false };
    db.any(qry, [true])
    .then(function(data){//success
        return res.redirect("/eventTemplateDevice");
    })
    .catch(function(error) {//error
        res.status(400).send(error);
    })
});

/* POSt http://localhost:3000/eventTemplateDevice/edit/:id (UPDATE)*/ 
router.post('/edit/:id', function(req, res, next) {
    var qry  = "UPDATE app_event_template_device SET event_template_id='"+ req.body.event_template_id + "', event_device_id='" + req.body.event_device_id + "', event_template_device_name='" + req.body.event_template_device_name + "', update_datetime='" + DateTime() + "' WHERE id='" + req.body.id + "'",
        resp = { "success": false },
        id   = req.params.id;
    db.any(qry, [true])
    .then(function(data){//success
        return res.redirect("/eventTemplateDevice");
    })
    .catch(function(error) {//error
        res.status(400).send(error);
    })
});

module.exports = router;