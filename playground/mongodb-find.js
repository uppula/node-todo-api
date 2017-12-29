// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err,client) =>{

  if (err){
    return console.log('Unable to Connect to MongoDB Server');
  }

  console.log('Connected to MongoDB Server');

  const tempDB = client.db('TodoAPP');

  var collection = tempDB.collection('user').find({role: 'Manager'}).toArray().then((docs) => {
    console.log('USer');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    if (err){
      console.log('Unable to fetch the data', err);
    }
  })


  // client.close();

});
