'use strict';

var server = require('./server');
var config = require('./config');
var http = require('http');

http.createServer(handleRequest)
    .listen(config.server.port,
        console.log('Node started on http://%s:%s', config.server.host, config.server.port));

function handleRequest(req, res) {
    res.writeHead(200);
    res.end(server('NodeJS'));
}