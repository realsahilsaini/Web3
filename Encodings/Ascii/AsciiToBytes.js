// //ASCII to Bytes
// function AsciiToBytes(asciiString){
//   return asciiString.split('').map(char => char.charCodeAt());
// }

// const asciiString = "SAHIL";
// const bytes = AsciiToBytes(asciiString);
// console.log(bytes);


// Ascii to UInt8Array using Uint8Array
function asciiToBytes(asciiString) {
  return new Uint8Array([...asciiString].map(char => char.charCodeAt()));
}

const ascii = "Hello";
const byteArray = asciiToBytes(ascii);
console.log(byteArray);


