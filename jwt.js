const jwt = require("jsonwebtoken");

const enc = jwt.sign({ userId: 123 }, "secret");
console.log(enc, typeof enc);

const dec = jwt.verify(enc, "secret");
console.log(dec, typeof dec);
