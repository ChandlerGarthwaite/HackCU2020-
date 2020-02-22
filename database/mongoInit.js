var url = "mongodb+srv://admin:0000@cluster0-yyd3s.mongodb.net/test?retryWrites=true&w=majority";
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("assassin");
  dbo.createCollection("users", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});
