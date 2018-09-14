var bcrypt = require('bcrypt');
// const saltRounds = 10;
// const myPlaintextPassword = 'hola mundo';
// const someOtherPlaintextPassword = 'not_bacon';
// bcrypt.genSalt(saltRounds, function(err, salt) {
//     bcrypt.hash(myPlaintextPassword, salt, (err,hash)=>{
//       console.log(hash);
//     });
// });
// const hash_='$2b$10$jNFXF0tLMlOdFEnWRYiRkeDAn8qNHCTRuQkg0rq9ALiGzNGQL3cqm';
// bcrypt.compare(myPlaintextPassword, hash_, function(err, res) {
//     console.log(res);
// });

const jwt= require('jsonwebtoken');
var data={
  id:10
}
var token=jwt.sign(data,'123abc');
console.log(token);
var decode=jwt.verify(token,'123abc');
console.log(decode);
