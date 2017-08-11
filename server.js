const MongoClient = require('mongodb');
// what is object destuctureing 
// that means to access the object properties as a variable
// make the object property as a single variable
// var wahab ={
//   name : 'sardar abdul wahab ch',
//   age : 17
// };
// var {name} = wahab;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/todoapp', (err,db) => {
	if(err) {
	 return	console.log('there is a error occurs in the server');
	} 
	console.log('server is connected ');
  //  db.collection('todoapp').insertOne({
  //  text:'some one is here',
  //  completed: false
  //  },(err,result) => {
  // if(err) {
  // 	return console.log('there is and problem because ' + err);
  // }else {
  // 	console.log(JSON.stringify(result.ops,undefined,2));
  // }
   // });
   // db.collection('todoapp').insertOne({
   // 	name: 'sardar abdul wahab ch',
   //  location: 'jaranwala',
   //  age:{name:'areeb'},
   // },(err,result) => {
   //   console.log(result.ops[0]._id);
   // })
	db.close();
});

