const bs58 = require('bs58');

function uint8ArrayToBase58(uint8Array) {
  try {
    return bs58.encode(uint8Array);
  } catch (error) {
    console.error('Error encoding to base58:', error);
  }
}

const byteArray = new Uint8Array([72, 101, 108, 108, 111]); // 
const base58String = uint8ArrayToBase58(byteArray);
console.log(base58String);
