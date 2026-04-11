
// Two pointer approach;
let nums = [1,2,3,4], k = 5;

var maxOperations = function(nums, k) {
    let count=0;
    let left=0;
    let right=nums.length-1;
    nums.sort((a,b)=>a-b);

    while(left<right){
        if(nums[left]+nums[right]===k){
            count++;
            left++;
            right--;
        }else if(nums[left]+nums[right]<k){
            left++;
        }else{
            right--;
        }
    }
    return count;
};

console.log(maxOperations(nums,k));

// hashmap approach should be used when the array is not sorted and we want to find pairs in O(n) time complexity