const crypto = require('crypto')

function generateSalt() {
    return crypto.randomBytes(128).toString('base64');
}

function generateHash(salt,pwd) {
    let hmac = crypto.createHmac('sha1',salt);
    return hmac.update(pwd).digest('hex');
}
const salt = generateSalt();
const password = 'pesho1';

const hashed = generateHash(salt,password);

console.log(hashed);