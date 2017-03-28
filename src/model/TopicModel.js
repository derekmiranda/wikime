const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/concept-tree'
MongoClient.connect(url, (err, db) => {
  if (err) console.log(err);
  console.log('Connected to MongoDB server.');

  var collection = db.collection('tests');

  collection.insertMany([
    {a : 1}, {a : 2}, {a : 3}
  ], function(err, result) {
    if (err) console.log('Error inserting documents');
    console.log("Inserted 3 documents into the document collection");
  });

  db.close();
});