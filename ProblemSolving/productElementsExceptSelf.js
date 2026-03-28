const arr=[1,2,3,4];
const newArr=[];

for(let i=0;i<arr.length;i++){
    newArr[i]=1;
    for(let j=0;j<arr.length;j++){
       
        if(i!=j){
            newArr[i]*=arr[j]
        }
    }
}

console.log('here is arr',arr);
console.log('here is new array...',newArr);

//  best case O(n) time complexity and O(1) space complexity
var productExceptSelf = function(nums) {
    let n = nums.length;
    let ans = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        ans[i] = ans[i - 1] * nums[i - 1];
    }

    let suffix = 1;
    for (let i = n - 2; i >= 0; i--) {
        suffix *= nums[i + 1];
        ans[i] *= suffix;
    }

    return ans;
};