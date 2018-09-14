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
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("5b999a6ce3ab75120aa2f26f")
  // },{ // OPERATORS
  //   $set:{
  //     completed:true
  //   }
  // },{
  //   returnOriginal:false
  // }).then((res)=>{
  //   console.log(res);
  // },(err)=>{
  //   console.log(err);
  // });
  db.collection('Users').findOneAndUpdate({
     _id: new ObjectID("5b9a73fce3ab75120aa2f327")
  },{
    $set:{
      name:'Glenda'
    },
    $inc:{
      age:1
    }
  },{
    returnOriginal:false
  }).then((res)=>{
    console.log('EXITOSO');
    console.log(res);
  },(err)=>{
    console.log(err);
  });
  // client.close();
});
