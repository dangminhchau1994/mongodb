const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Users', (err, db) => {
    if(err) return console.log("Cannot connect to Mongodb server");
    console.log("Connect successful");

    // db.collection('Users').find({_id: new ObjectID('59dc52f3a232331060d5b756')}).toArray().then((docs) => {
    //   console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //   if(err) return console.log("Unable to fetch data", err);
    // });

    // db.collection('Users').find().count().then((count) => {
    //   console.log(`Total count: ${count}`);
    // }, (err) => {
    //   if(err) return console.log("Unable to fetch data", err);
    // });

    db.collection('Users').find({name: "Dang Minh Chau"}).toArray().then((docs) => {
      console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
      if(err) return console.log("Unable to fetch data", err);
    });

    // db.close();
})
