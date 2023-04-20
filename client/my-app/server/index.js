const express = require('express');
let app = express();
var path = require('path');
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({
  extended: true
}));


//make the post route to send to the mongoDB and save it.
app.post('journal', function(req, res){
//when you try this, start with a console.log for req.body, you should hopefully have access to the form entry as an object - I forget what middleware you need to have req.body look that up later

//make sure you use RETURN model.create because I think that does a promise thing? ANother thing to look up

//make sure you look
})

//Crap, just realized technically
let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});