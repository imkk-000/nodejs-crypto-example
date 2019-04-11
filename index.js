const crypto = require('crypto')
const hmacSHA256 = crypto.createHmac('sha256', 'this is my secret key.')

hmacSHA256.write('hash data')
hmacSHA256.end()
const hashData = hmacSHA256.read()
console.log(hashData.toString('hex'))
