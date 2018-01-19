'use strict';

import path from 'path';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Menu from './components/Menu';
import OficinaInformacion from './components/OficinaInformacion';

let app = express();

// Set the view engine to ejs
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// Serve static files from the 'public' folder
app.use(express.static('src/static'));

// GET /
app.get('/', function (req, res) {
  var staticMenu = renderToString(<Menu/>);
  var staticOficinaInformacion = renderToString(<OficinaInformacion/>);

  res.render('layout', { menu: staticMenu, oficinas: staticOficinaInformacion })
})

// Start server
let server = app.listen(8090, function () {
  let host = server.address().address;
  let port = server.address().port;

  if (host === '::') {
    host = 'localhost';
  }

  console.log('App listening at http://%s:%s', host, port);
});
