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

/* GET http://localhost:3000/device/test */
router.get('/test', function(req, res, next) {
	res.render('index', { title: 'Device 123'});
});

/* GET http://localhost:3000/device/ */
router.get('/', function(req, res, next) {
    var qry  = "SELECT * FROM app_device WHERE delete_flg=0 ORDER BY id ASC",
        resp = { "success": false };
    db.any(qry, [true])
    .then(function(data){//success
        if (data.rowCount != 0) {
            res.render('device/list',{title: "Device", data: data});
        }
    })
    .catch(function(error) {//error
        res.status(400).send(error);
    })
});

/* GET http://localhost:3000/device/add */
router.get('/add', function(req, res, next) {
    res.render("device/add", { title: "Add Device" });
});

/* GET http://localhost:3000/device/edit/:id */
router.get('/edit/:id', function(req, res, next) {
    var resp = { "success": false },
        id   = req.params.id,
        qry  = "SELECT * FROM app_device WHERE id='"+id+ "' ";
    db.any(qry, [id])
    .then(function(data){//success
        if (data.rowCount != 0) {
            res.render("device/edit", { title: "Edit Device", data: data[0]});
        }
    })
    .catch(function(error) {//error
        res.status(400).send(error);
    })
});

/* GET http://localhost:3000/device/delete/:id */
router.get('/delete/:id', function(req, res, next) {
    var id   = req.params.id,
        resp = { "success": false },
        qry  = "UPDATE app_device SET delete_flg=1 WHERE id='"+id+ "' ";
    db.any(qry, [id])
    .then(function(data){//success
        res.redirect("/device");
    })
    .catch(function(error) {//error
        res.status(400).send(error);
    })
});

///////// POST ////////////

/* POSt http://localhost:3000/device/add (SAVE)*/ 
router.post('/add', function(req, res, next) {
    var qry  = "INSERT INTO app_device(name) VALUES('"+ req.body.name +"')",
        resp = { "success": false };
    db.any(qry, [true])
    .then(function(data){//success
        return res.redirect("/device");
    })
    .catch(function(error) {//error
        res.status(400).send(error);
    })
});

/* POSt http://localhost:3000/device/edit/:id (UPDATE)*/ 
router.post('/edit/:id', function(req, res, next) {
    var qry  = "UPDATE app_device SET name='"+ req.body.name +"', update_datetime='" + DateTime() + "' WHERE id='" + req.body.id + "'",
        resp = { "success": false },
        id   = req.params.id;
    db.any(qry, [true])
    .then(function(data){//success
        return res.redirect("/device");
    })
    .catch(function(error) {//error
        res.status(400).send(error);
    })
});

module.exports = router;