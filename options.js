

var iss = "SuperSecureAuthority";
var sub = "brenden";
var aud = "RecipientService";

var verifyOptions = {
    issuer : iss,
    subject: sub,
    audience: aud,
    algorithm: 'RS256'
}

module.exports = verifyOptions;