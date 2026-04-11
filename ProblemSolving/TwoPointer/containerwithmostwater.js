let arr=[1,8,6,2,5,4,8,3,7];

let maxArea=0;
let height=0;
let width=0;

// brute force approach

for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        height=Math.min(arr[i],arr[j]);
        width=j-i;
        area=height*width;
        maxArea=Math.max(maxArea,area);
    }
}

console.log(maxArea);

// Two pointer approach
let left=0;
let right=arr.length-1;

while(left<right){
    height=Math.min(arr[left],arr[right]);
    width=right-left;
    area=height*width;
    maxArea=Math.max(maxArea,area);
    if(arr[left]<arr[right]){
        left++;
    }else{
        right--;
    }       
}

console.log(maxArea);