//  str='aabbaaccddf';
//  char='a';

function FindFirstRepeatingCharUsingBruteForce(str){
   for(let i=0;i<str.length;i++){
    
      for(let j=i+1;j<str.length;j++){

        if(str[i]===str[j]){
            return str[i];
        }
      }
   }

   return -1;

}

console.log('here is first non repeating char..',FindFirstRepeatingCharUsingBruteForce('aabbaaccdf'));


//  str='aabbaaccddf';
//  char='a';



// optimal answer using object in javascript..
// function FindFirstRepeatingCharUsingObject(str){

//   let count={};
  
//   for(let char of str){
//     count[char]=(count[char] || 0) + 1;
//   }

//   for(let char of str){
//     if(count[char]>1){
//        return char;
//     }
//   }

//   return -1;

// }

// console.log('here is first non repeating char..',FindFirstRepeatingCharUsingObject('aabbaaccdf'));