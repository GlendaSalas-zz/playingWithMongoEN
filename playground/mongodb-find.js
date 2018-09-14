// const MongoClient= require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');
// var ObjectId = require('mongodb')
// var obj=new ObjectID();
// console.log(obj);
// var user={name:'andrew', age:25};
// var{name}=user;

// console.log(name);
MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true },(err, client)=>{
  if(err){
    return console.log('Uabled to connect to mongodb SERVER');
  }
  console.log('Connected');
  const db=client.db('TodoApp');
//   db.collection('TodoApp').insertOne({
//     text:'Something to do',
//     completed:false
//   },(err, result)=>{
//     if(err){
//       return console.log('Unable to insert todo', err);
//     }
//     console.log(JSON.stringify(result.ops, undefined, 2));
//   });
  db.collection('Users').find({
      _id: new ObjectID("5b9a73ebe3ab75120aa2f323")
  }).toArray().then((docs)=>{
    console.log(JSON.stringify(docs, undefined,2));
  },(err)=>{
    console.log('Unable to fetch', err);
  });
  // db.collection('Users').find({name:'Gardenia'}).toArray().then((data)=>{
  //   console.log(data);
  // },(err)=>{
  //   console.log(err);
  // });

  // client.close();
});
