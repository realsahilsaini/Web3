const uint8Array = new Uint8Array([83, 65, 72, 73, 76]);
const base64Encoded = Buffer.from(uint8Array).toString("base64");
console.log(base64Encoded);