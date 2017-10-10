const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/Users', (err, db) => {
    if(err) return console.log("Cannot connect to Mongodb server");
    console.log("Connect successful");

    db.collection('Users').insertOne({
      name: "Dang Minh Chau",
      age: 23
    }, (err, result) => {
      if(err) return console.log("Unable to insert");

      console.log(JSON.stringify(result.ops, undefined, 2));
    });

    db.collection('Company').insertOne({
      name: "HBB Solution",
      location: "244 Cong Quynh"
    }, (err, result) => {
      if(err) return console.log("Unable to insert");
      console.log(JSON.stringify(result.ops,undefined, 2));
      console.log(result.ops[0]._id);
    });

    db.close();
})
