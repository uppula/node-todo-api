// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err,client) =>{

  if (err){
    return console.log('Unable to Connect to MongoDB Server');
  }

  console.log('Connected to MongoDB Server');

  const tempDB = client.db('TodoAPP');

  //delete many

  // var collection = tempDB.collection('Todos').deleteMany({text: 'Something to do'}).then((err) => {
  //   console.log('unable to delete', err);
  // } , (result) => {
  //   console.log(JSON.stringify(result, undefined, 2));
  // });

  //delete one

  var collection = tempDB.collection('Todos').deleteOne({text: 'Something to do'}).then((err)=>{}, (result) =>{

    console.log('Deleted successfully');
    console.log(JSON.stringify(result, undefined, 2));

  })

  //findone and delete the same

  var collection = tempDB.collection('Todos').findOneAndDelete({text: 'Something to do1'}).then((result)=>{
    console.log(JSON.stringify(result));
  })

  // client.close();

});
