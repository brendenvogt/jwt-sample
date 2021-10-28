var process = require("process");
var jwt = require('jsonwebtoken');
var fs = require('fs');
var options = require("./options");

var token = process.argv[2];

// get public key 
var publicKey = fs.readFileSync('public.key', 'utf-8');

var verifyOptions = options;

// verify with public key using RS256
try {
    var verified = jwt.verify(token, publicKey, verifyOptions)
} catch(err) {
    console.log("Expired/invalid token");
} finally {
    console.log(verified);
}
