var express = require('express');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');
var objectID = mongodb.ObjectID;

var COLLECTION_NAME = 'vergeblog';
var port = process.env.PORT || 8080;
var app = express();

app.use(bodyParser.json());
//create link to angular build directory
var distDir = __dirname + "/dist";
app.use(express.static(distDir));

var db;
process.env.MONGODB_URI = 'mongodb://test:test@ds127132.mlab.com:27132/vergeblog';
//Connect to the database before starting the application server.
mongodb.MongoClient.connect(process.env.MONGODB_URI, function (err, database){
  if (err) {
    console.log(err);
    process.exit(1);
  }
  //Save database object from the callback for reuse.
  db = database;
  console.log("Database conection ready");

  //Initialize the app.
  var server = app.listen(port, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  })
});

// Contact API ROUTES
//generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
   console.log('Error : ' + reason);
   res.status(code || 500).json({ "error": message});
}

// "/api/contacts"
//   GET: finds all contacts
//   POST: create a new contacts

app.get('/api/blogs', function(req, res){
  db.collection(COLLECTION_NAME).find({}).toArray(function(err, docs){
    if (err) {
      handleError(res, err.message, "Failed to get contacts.");
    } else {
      res.status(200).json(docs);
    }
  })
})

app.post("/api/blogaddnew", function(req, res) {
  var newblog = req.body;
  newblog.createDate = new Date();
  console.log(newblog);
  // if (!req.body.name) {
  //   handleError(res, "Invalid user input", "Must provide a name.", 400);
  // }

  db.collection(COLLECTION_NAME).insertOne(newblog, function(err, doc) {
    console.log(doc);
    if (err) {
      handleError(res, err.message, "Failed to create new contact.");
    } else {
      res.status(201).json(doc.ops[0]);
    }
  });
});
