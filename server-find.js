// const MongoClient = require('mongodb');
const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/todoapp', (err,db) => {
	if(err) {
	 return	console.log('there is a error occurs in the server');
	} 
	console.log('server is connected ');
  db.collection('todoapp').find({
    _id : new ObjectID('598cbf67762b0724f4998a23'),
  }).toArray().then((docs) => {
    console.log('connected');
    console.log(JSON.stringify(docs,undefined,2));
  },(err) => {
    console.log('there is an error with the todos')
  });
	db.close();
});

