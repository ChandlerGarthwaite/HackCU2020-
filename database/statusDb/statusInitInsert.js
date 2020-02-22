//username, dead/alive, points, lat/long, current target, fact1, fact2, fact3, fact4
var url = "mongodb+srv://admin:0000@cluster0-yyd3s.mongodb.net/test?retryWrites=true&w=majority";
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("assassin");
  var myobj = { name: "admin", status: "gm", position: "12.01237, 179.23123", current_target: "test", f1: "test", f2: "test", f3: "test", f4: "test"};
  dbo.collection("userStatus").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 userStatus inserted");
    db.close();
  });
});
