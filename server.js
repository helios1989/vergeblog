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
      handleError(res, err.message, "Failed to get blogs.");
    } else {
      res.status(200).json(docs);
    }
  })
})
app.get("/api/blogs/:id", function(req, res) {
  db.collection(COLLECTION_NAME).findOne({ _id:new objectID(req.params.id) }, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to get blogs");
    } else {
      res.status(200).json(doc);
    }
  });
});
app.delete("/api/blogs/:id", function(req, res) {
  db.collection(COLLECTION_NAME).deleteOne({_id: new objectID(req.params.id) }, function(err, result) {
    console.log(res.params);
    if (err) {
      handleError(res, err.message, "Failed to delete blogs");
    } else {
      res.status(200).json(req.params.id);
    }
  });
});
app.put("/api/blogs/:id", function(req, res) {
  var updateDoc = req.body;
  delete updateDoc._id;
  db.collection(COLLECTION_NAME).updateOne({_id: new objectID(req.params.id)}, updateDoc, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to update blogs");
    } else {
      updateDoc._id = req.params.id;
      res.status(200).json(updateDoc);
    }
  });
});

app.post("/api/blogs", function(req, res) {
  var newblog = req.body;
  newblog.createDate = new Date();
  // if (!req.body.name) {
  //   handleError(res, "Invalid user input", "Must provide a name.", 400);
  // }
  // Load the twilio module
  var twilio = require('twilio');

  // Create a new REST API client to make authenticated requests against the
  // twilio back end
  var client = new twilio.RestClient('AC9b37a72f5e09062e3e6fd289a5c1e706', 'b3062f19ca21ef2b8ddf9885fbc93a0b');

  // Pass in parameters to the REST API using an object literal notation. The
  // REST client will handle authentication and response serialzation for you.
  client.sms.messages.create({
      to:'+63926804907',
      from:'2015617486',
      body:'ahoy hoy! Testing Twilio and node.js'
  }, function(error, message) {
      // The HTTP request to Twilio will run asynchronously. This callback
      // function will be called when a response is received from Twilio
      // The "error" variable will contain error information, if any.
      // If the request was successful, this value will be "falsy"
      if (!error) {
          // The second argument to the callback will contain the information
          // sent back by Twilio for the request. In this case, it is the
          // information about the text messsage you just sent:
          console.log('Success! The SID for this SMS message is:');
          console.log(message.sid);

          console.log('Message sent on:');
          console.log(message.dateCreated);
      } else {
          console.log('Oops! There was an error.');
      }
  });
  db.collection(COLLECTION_NAME).insertOne(newblog, function(err, doc) {
    console.log(doc);
    if (err) {
      handleError(res, err.message, "Failed to create new contact.");
    } else {
      res.status(201).json(doc.ops[0]);
    }
  });
});

// //twilio sending sms
// app.post('/api/sendsms/', function(req, res){
//   var accountSid = 'AC9b37a72f5e09062e3e6fd289a5c1e706',
//     authToken =  'process.env.TWILIO_AUTH_TOKEN',
//     sendingNumber = req.params.phone;
//     message = 'hello world';
//   var client = require('twilio')(accountSid, sendingNumber);
//   // console.log(client.api.messages.create())
//   return client.api.messages
//     .create({
//       body: message,
//       to: '+63926804907',
//       from: '+639173057898',
//     }).then(function(data) {
//       res.status(200).json('Administrator notified');
//     }).catch(function(err) {
//       res.status(200).json('Administrator notified' + err);
//     });;
// })



