require('dotenv').config();


var jwt = require('jsonwebtoken');

const tokentrue = (token) => {
    
}

var decoded = jwt.verify(token, 'shhhhh');
console.log(decoded.foo) // bar
 
// verify a token symmetric
jwt.verify(token, 'shhhhh', function(err, decoded) {
  console.log(decoded.foo) // bar
});
 
// invalid token - synchronous
try {
  var decoded = jwt.verify(token, 'wrong-secret');
} catch(err) {
  // err
}