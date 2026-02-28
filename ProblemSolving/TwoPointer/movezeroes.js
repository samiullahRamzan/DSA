var moveZeroes = function(nums) {

    let p1=0;

    if(nums.length==1){
        return nums;
    }

    
    for(let p2=0;p2<nums.length;p2++){
      
        if(nums[p2]!=0){ 
            [nums[p1], nums[p2]] = [nums[p2], nums[p1]];

           p1++;
        }
    }
    
    return nums
  
    
};


console.log('here is output...',moveZeroes([5,0,0,2]))