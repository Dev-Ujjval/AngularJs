var express = require('express');
var app = express();
// web-ui will be the same folder name.
app.use(express.static("web-ui")); 
app.get('/', function (req, res,next) {
 res.redirect('/'); 
});
app.listen(4200, 'localhost');
console.log("Server is Listening on port 4200");