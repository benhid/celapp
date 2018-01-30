'use strict';

// Dependencies
import mongoose from 'mongoose';
import path from 'path';
import express from 'express';
import session from 'express-session';
import React from 'react';
import { renderToString } from 'react-dom/server';
import bodyParser from 'body-parser';

// Pages
import Index from './components/Index';
import Login from './components/Login';
import SoyCeliaco from './components/SoyCeliaco';
import AdminPanel from './components/AdminPanel';

// Initialize server and database
let app = express();
let db = mongoose.connect('mongodb://localhost:27017/celiapp', function(err, response){
   if(err){ console.log('Failed to connect to ' + db); }
   else{ console.log('Connected to ' + db); }
});

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(session({
    secret: '2C44-4D44-WppQ38S',
    resave: true,
    saveUninitialized: true
}));

// Set the view engine to ejs
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// Authentication and Authorization Middleware
var auth = function(req, res, next) {
  if (req.session && req.session.user === "carlos" && req.session.admin)
    return next();
  else
    return res.sendStatus(401); // Unauthorized!
};

// Serve static files from the 'public' folder
app.use(express.static('src/static'));

// GET /login?username=&password=
app.get('/login', function (req, res) {
  if (req.query.username === "carlos" && req.query.password === "pwd") {
    req.session.user = "carlos";
    req.session.admin = true;
    res.redirect('/adminpanel');
  } else {
    res.render('base_layout.ejs', {
      contenido: renderToString(<Login/>)
    })
  }
});

// GET /logout
app.get('/logout', function (req, res) {
  req.session.destroy(function(err) {
    if(err) {
      console.log(err);
    } else {
      res.redirect('/');
    }
  });
});

// GET /
app.get('/', function (req, res) {
  res.render('base_layout.ejs', {
    contenido: renderToString(<Index/>)
   })
});

// GET /soyceliaco
app.get('/soyceliaco', function (req, res) {
  res.render('base_layout.ejs', {
    contenido: renderToString(<SoyCeliaco/>)
   })
});

// INSERT TO DATABASE
app.post("/soyceliaco", function(req,res){
  var Data = mongoose.model('Data', mongoose.Schema({
    username: String,
    password: String,
  }));

  var record = new Data(req.body);
  record.save(function(err,data){
    if(err){
      res.send(err);
    }
    else{
      res.send({data: "Record has been Inserted..!!"});
    }
  });
})

// GET /adminpanel
app.get('/adminpanel', auth, function (req, res) {
  res.render('base_layout.ejs', {
    contenido: renderToString(<AdminPanel/>)
  })
});

// Start server
let server = app.listen(8090, function () {
  let host = server.address().address;
  let port = server.address().port;

  if (host === '::') {
    host = 'localhost';
  }

  console.log('App listening at http://%s:%s', host, port);
});
