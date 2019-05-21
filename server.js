var express = require ('express');
var path = require('path');

var app = express();

var PORT  = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Router points our api's and html

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);


//LISTENER STARTS OUR SERVER

app.listen(PORT, function(){
  console.log("App listening on port: " + PORT);
})
