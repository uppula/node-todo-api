const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017', (err,database) =>{

  if (err){
    return console.log('Unable to Connect to MongoDB Server');
  }

  console.log('Connected to MongoDB Server');

  const tempDB = database.db('TodoAPP');

  var collection = tempDB.collection('Todos');

  // console.log(collection);

  // collection.insertOne({
  //   text: 'Something to do111',
  //   completed: false
  // },(err,result) => {
  //   if (err){
  //     return console.log('Unable to insert todo');
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });


  collection = tempDB.collection('user');

  collection.insertOne({
    name:  'Sampath Uppula',
    age: 42,
    role: 'Tech manager'
  },(err,result) => {
    if(err){
      return console.log('insert failed..');
    }

    console.log(JSON.stringify(result.ops, undefined, 2));

    console.log(result.ops[0]._id.getTimestamp());
  });
  database.close();

});
