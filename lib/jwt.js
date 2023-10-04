const crypto = require('crypto')

class JWT {
    constructor () {}

    sign (data) {
        const header = this.encode({alg: 'sha256', typ: 'jwt'})
        const payload = this.encode(data)
        const base64url = [header, payload].join('.')
        const signature = this.createSignature(base64url, 'jsk1234')
        const jwt = [base64url, signature].join('.')
        return jwt
    }

    encode (obj) {
        return Buffer.from(JSON.stringify(obj)).toString('base64url')
    }

    decode (base64) {
        return JSON.parse(Buffer.from(JSON.stringify(base64)).toString('utf-8'))
    }

    createSignature (base64url) {
        return crypto.createHmac('sha256',salt).update(base64url).digest('base64url')
    }
}

module.exports = JWT