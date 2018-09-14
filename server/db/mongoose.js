var mongoose=require('mongoose');
mongoose.Promise=global.Promise;
mongoose.set('useCreateIndex', true);
// console.log(process.env);
console.log(process.env.MONGODB_URI);
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true });
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true });
module.exports={mongoose};
