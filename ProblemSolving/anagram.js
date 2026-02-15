// function isAnagram(str1, str2) {
//     if (str1.length !== str2.length) return false;

//     const used = new Array(str2.length).fill(false); 

//     for (let i = 0; i < str1.length; i++) {
//         let found = false;

//         for (let j = 0; j < str2.length; j++) {
//             if (str1[i] === str2[j] && !used[j]) {
//                 used[j] = true; 
//                 found = true;
//                 break;
//             }
//         }

//         if (!found) {
//             return false; 
//         }
//     }

//     return true;
// }

// console.log("Is this anagram?", isAnagram("lissten", "ssilent")); // true


function Anagram(str1,str2){
  if(str1.length!==str2.length) return false;
  let map=new Map();
  
  let char;
  for(let i=0;i<str1.length;i++){
    char=str1[i];
    if(map.has(char)){
      map.set(char,map.get(char)+1);
    }else{
      map.set(char,1);
    }
  }

  for(let j=0;j<str2.length;j++){
    char=str2[j];
    if(map.get(char)==0 || !map.has(char)){
      return false;
    }
    map.set(char,map.get(char)-1);
  }

  return true;
}


// Test
console.log(Anagram("lissten", "ssilent"));  // true
console.log(Anagram("abc", "cab"));        // true
console.log(Anagram("hello", "bello"));    // false


//  without using extra space like 
function isAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;

    const sorted1 = str1.split('').sort().join('');
    const sorted2 = str2.split('').sort().join('');


    return sorted1 === sorted2;
}


console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "bello"));  // false

