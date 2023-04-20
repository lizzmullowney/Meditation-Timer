const express = require('express');
let app = express();
var path = require('path');
var bodyParser = require('body-parser');



app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // Update with your client's URL
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); // Add the allowed HTTP methods
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//make the post route to send to the mongoDB and save it.
app.post('/journal', function(req, res){
//when you try this, start with a console.log for req.body, you should hopefully have access to the form entry as an object - I forget what middleware you need to have req.body look that up later
console.log(req.body);
//make sure you use RETURN model.create because I think that does a promise thing? ANother thing to look up

//make sure you look
})


let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});