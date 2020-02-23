//username, dead/alive, points, lat/long, current target, fact1, fact2, fact3, fact4
var url = "mongodb+srv://admin:0000@cluster0-yyd3s.mongodb.net/test?retryWrites=true&w=majority";
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("assassin");
  dbo.createCollection("userStatus", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});
