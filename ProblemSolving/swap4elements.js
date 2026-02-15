
const arr=[1,2,3,4,5,6,7,8,9];
let start=0;
let mid;
let temp;

mid=Math.ceil(arr.length/2);

// while(mid!=arr.length){
//     temp=arr[start];
//     arr[start]=arr[mid];
//     arr[mid]=temp;
    
//     start++;
//     mid++;
// }

// in javascript there is another method to do that
// for (let i = 0; i < Math.floor(arr.length / 2); i++) {
//   [arr[i], arr[mid + i]] = [arr[mid + i], arr[i]];
// }

console.log('here output array..',arr);



