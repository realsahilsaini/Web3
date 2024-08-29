// function arraytoHex(byteArray){
//     // Function to convert array to hex string
//     // Accepts: Uint8Array
//     // Returns: String
    
//     let hexString = '';
//     for(let i = 0; i < byteArray.length; i++){
//         hexString += byteArray[i].toString(16).padStart(2, '0');
//     }

//     return hexString;
// }

// const byteArray = new Uint8Array([83, 65, 72, 73, 76]);
// const hexString = arraytoHex(byteArray);
// console.log(hexString);






function hexToArray(hexString) {
  const byteArray = new Uint8Array(hexString.length / 2);
  for (let i = 0; i < byteArray.length; i++) {
    byteArray[i] = parseInt(hexString.substr(i * 2, 2), 16);
  }
  return byteArray;
}

// Example usage:
const hex = "48656c6c6f";
const byteArrayFromHex = hexToArray(hex);
console.log(byteArrayFromHex); // Output: Uint8Array(5) [72, 101, 108, 108, 111]
