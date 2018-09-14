var mongoose=require('mongoose');
mongoose.Promise=global.Promise;
mongoose.set('useCreateIndex', true)
let db_ = {
  localhost: 'mongodb://localhost:27017/TodoApp',
  mlab: process.env.DATABASE
};
// mongoose.connect( db.localhost || db.mlab);
console.log(db_.mlab);
mongoose.connect(db_.mlab || db_.localhost,{ useNewUrlParser: true });
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true });
module.exports={mongoose};
