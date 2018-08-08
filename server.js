const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

var app = express();
var PORT = process.env.PORT || 8080; 

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())


app.listen(PORT, function(){
    console.log('the server is listening on port: ' + PORT)
});


