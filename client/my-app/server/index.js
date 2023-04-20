const express = require('express');
let app = express();
var path = require('path');
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({
  extended: true
}));


//make the post route to send to the mongoDB and save it.
app.post('journal', function(req, res){

})

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});