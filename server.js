var express = require('express'); 
var app = express();
var http = require('http').Server(app);
var bodyParser = require('body-parser'); 

app.use (bodyParser.json());


app.use(express.static(__dirname + '/www'));

var path=require("path");

require('./routes/homepage.js')(app, path);
require('./routes/login.js')(app, path);

let server = http.listen(3000, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log('My First Nodejs Server!');
    console.log('Server listening on: '+ host + ' port:' + port);
});





// app.get('/test', function (req, res) {
//     res.sendFile(__dirname + '/www/test.html');
// });