//Bytes to ASCII 
// function bytesToAscii(byteArray) {
//   return byteArray.map(n => String.fromCharCode(n)).join(''); 
// }

// const bytes = [83, 65, 72, 73, 76]; 
// const asciiString = bytesToAscii(bytes);
// console.log(asciiString);

//Bytes to ASCII - using Uint8Array
function bytesToAscii(byteArray) {
  return new TextDecoder().decode(byteArray);
}

// Example usage:
const bytes = new Uint8Array( [83, 65, 72, 73, 76]);
const asciiString = bytesToAscii(bytes);
console.log(asciiString); 








