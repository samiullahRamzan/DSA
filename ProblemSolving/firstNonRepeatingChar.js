// // function FirstNonRepeatChar(str1){
// //   let map=new Map();
  
// //   let char;
// //   for(let i=0;i<str1.length;i++){
// //     char=str1[i];
// //     if(map.has(char)){
// //       map.set(char,map.get(char)+1);
// //     }else{
// //       map.set(char,1);
// //     }
// //   }

// //   for(let j=0;j<str1.length;j++){
// //     char=str1[j];
    
// //     if(map.get(char)==1){
// //         return char;
// //     }
// //   }
  
// //   return null;
// // }

// // console.log('first non repeating character...',FirstNonRepeatChar('LemoneLm'))


// function FirstNonRepeatingChar(str){

//   let count={};
  
//   for(let char of str){
//     count[char]=(count[char] || 0) +1;
//   }

//   console.log('here is count object..',count);

//   for(let char of str){

//     if(count[char]===1){
//       return char
//     }
//   }

//   return null;

// }

// console.log('here is first no repeating character..',FirstNonRepeatingChar('swiss'));


// //  by using array....
// function firstNonRepeatingCharArray(str) {
//   const arr = [];
  
//   // Convert string to array manually
//   for (let i = 0; i < str.length; i++) {
//     arr[i] = str[i];
//   }

//   // Loop through array
//   for (let i = 0; i < arr.length; i++) {
//     let isRepeating = false;

//     // Check every other element
//     for (let j = 0; j < arr.length; j++) {
//       if (i !== j && arr[i] === arr[j]) {
//         isRepeating = true;
//         break;
//       }
//     }

//     if (!isRepeating) {
//       return arr[i]; // First non-repeating character
//     }
//   }

//   return null; 
// }

// console.log(firstNonRepeatingCharArray("swiss")); // w
// console.log(firstNonRepeatingCharArray("LemoneLm")); // o
// console.log(firstNonRepeatingCharArray("aabbcc")); // null


function FindNonRepeatingCustom(str) {
  for (let i = 0; i < str.length; i++) {
    let isRepeating = false;

    for (let j = 0; j < str.length; j++) {
      if (i !== j && str[i] === str[j]) {
        isRepeating = true;
        break; 
      }
    }

    if (!isRepeating) {
      return str[i]; 
    }
  }

  return null; 
}

console.log('First non-repeating character:', FindNonRepeatingCustom('swiss')); 


