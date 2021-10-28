// import module
var jwt = require('jsonwebtoken');
var fs = require('fs');
var options = require("./options");

// read private key in using utf-8
var privateKey = fs.readFileSync('private.key', 'utf-8');

// attach payload
var exp = "15S"; // expires in 120 seconds
var foo = "bar";

var signingOptions = {
    ...options,
    expiresIn: exp,
    algorithm: 'RS256'
};

var payload = { 
    foo,
    // iat: Math.floor(Date.now() / 1000) - 30 // test old token backdate
};

// sign with private key using RSA RS256
var token = jwt.sign(payload, privateKey, signingOptions);
console.log(token);

// =======>>> transfer this token over the wire over https =======>>>

// get public key 
var publicKey = fs.readFileSync('public.key', 'utf-8');

var verifyOptions = {
    ...options,
    maxAge: exp,
    algorithm: 'RS256'
};

// verify with public key using RS256
try {
    var verified = jwt.verify(token, publicKey, verifyOptions)
} catch(err) {
    console.log("Expired/invalid token");
} finally {
    console.log(verified);
}

