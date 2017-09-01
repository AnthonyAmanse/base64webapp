var express = require("express");
var app = express();

app.get("/decode/*", function (request, response) {
    var path = request.path
    var stringEntered = path.substr(8)
    console.log("Path is = " + path + "\n-Substring = " + stringEntered)
    response.send(new Buffer(stringEntered, 'base64').toString('ascii'))
    return;
});

app.get("/encode/*", function (request, response) {
    var path = request.path
    var stringEntered = path.substr(8)
    console.log("Path is = " + path + "\n-Substring = " + stringEntered)
    response.send(new Buffer(stringEntered).toString('base64'))
    return;
});

//serve static file (index.html, images, css)
app.use(express.static(__dirname + '/views'));

app.get('/main', function(req, res){
    res.sendFile('index.html', { root: __dirname + "/views" } );
});


var port = process.env.PORT || 3000
app.listen(port, function() {
    console.log("To view your app, open this link in your browser: http://localhost:" + port);
});
