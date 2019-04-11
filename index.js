const SECRET_KEY = 'this is my secret key.'
const crypto = require('crypto')
const hmacSHA256 = crypto.createHmac('sha256', SECRET_KEY)

hmacSHA256.write('hash data')
hmacSHA256.end()

const hashData = hmacSHA256.read()
// afdcf2494192a38859861e224f2abd2c995edc45ef0be2f4e7a215bd52e18c97
console.log(hashData.toString('hex'))
