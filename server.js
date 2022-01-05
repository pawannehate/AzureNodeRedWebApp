// add Git as suggested in https://github.com/jmservera/node-red-azure-webapp/issues/7
process.env.Path = 'D:\\Program Files\\Git\\cmd;D:\\Program Files\\Git\\usr\\bin;' + process.env.Path;
//jshint esversion:6
var express = require("express");
var RED=require('node-red');
var app= express();
 var http=require('http');

const PORT=process.env.PORT||8000;

var server=http.createServer(app);
var settings=require("./settings.js");

RED.init(server,settings);

app.use(settings.httpAdminRoot,RED.httpAdmin);
app.use(settings.httpNodeRoot,RED.httpNode);
 
 server.listen(settings.uiPort);
console.log(`listening port:${settings.uiPort}`);
//RED.start();

var embeddedStart = require('node-red-embedded-start');
embeddedStart.inject(RED);
 
// then use RED.start() just as you would normally
RED.start().then((result) => {
    RED.node.getFlow('94912f4c.1d8c2');
}).catch((err) => {
    // same as above example
});

