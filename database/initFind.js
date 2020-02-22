var url = "mongodb+srv://admin:0000@cluster0-yyd3s.mongodb.net/test?retryWrites=true&w=majority";
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("assassin");
  dbo.collection("users").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result.name);
    db.close();
  });
});
