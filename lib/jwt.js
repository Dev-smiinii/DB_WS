const crypto = require("crypto");

class JWT {
  constructor() {}

  sign(data) {
    const header = this.encode({ alg: "sha256", typ: "jwt" });
    const payload = this.encode(data);
    const base64url = [header, payload].join(".");
    const signature = this.createSignature(base64url, "jsk1234");
    const jwt = [base64url, signature].join(".");
    return jwt;
  }

  verify(token, salt) {
    try {
      const [header, payload, signature] = token.split(".");
      const base64url = [header, payload].join(".");
      const newSignature = this.createSignature(base64url, salt);
      if (signature !== newSignature) return null;
      const result = this.decode(payload);
      return result;
    } catch (err) {
      throw new Error(err.message);
    }
  }

  encode(obj) {
    return Buffer.from(JSON.stringify(obj)).toString("base64url");
  }

  decode(base64) {
    return JSON.parse(Buffer.from(JSON.stringify(base64)).toString("utf-8"));
  }

  createSignature(base64url, salt) {
    return crypto
      .createHmac("sha256", salt)
      .update(base64url)
      .digest("base64url");
  }
}

module.exports = JWT;
