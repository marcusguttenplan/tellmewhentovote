var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;

var DATES_COLLECTION = "dates";

var app = express();
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;

// Connect to the database before starting the application server.
mongodb.MongoClient.connect('mongodb://localhost:27017/election2016', function (err, database) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Save database object from the callback for reuse.
  db = database;
  console.log("Database connection ready");

  // Initialize the app.
  var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
});

// DATES API ROUTES BELOW

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

/*  "/dates"
 *    GET: finds all dates
 *    POST: NOFUCKINGPOST,NOTYET
 */

app.get("/dates", function(req, res) {
  db.collection(DATES_COLLECTION).find({}).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get dates.");
    } else {
      res.status(200).json(docs);
    }
  });
});

app.get("/dates/:id", function(req, res) {
    db.collection(DATES_COLLECTION).find({ date:"xx/xx/xxxx" }, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to get dates");
    } else {
      res.status(200).json(doc);
    }
  });
});


