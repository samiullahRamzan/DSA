var increasingTriplet = function(nums) {
    let n = nums.length;

    // Loop 1: Pick the first element (i)
    for (let i = 0; i < n - 2; i++) {
        
        // Loop 2: Pick the second element (j) anywhere AFTER i
        for (let j = i + 1; j < n - 1; j++) {
            
            // Loop 3: Pick the third element (k) anywhere AFTER j
            for (let k = j + 1; k < n; k++) {
                
                // Check if they form an increasing sequence
                if (nums[i] < nums[j] && nums[j] < nums[k]) {
                    console.log(`Found: ${nums[i]} < ${nums[j]} < ${nums[k]}`);
                    return true;
                }
            }
        }
    }

    return false;
};

let numbers = [20, 100, 10, 12, 5, 13];
console.log('Final Result:', increasingTriplet(numbers));


// best case  O(n) time complexity O(1) space complexity

var increasingTriplet = function(nums) {
    let first = Infinity;
    let second = Infinity;

    for (const num of nums) {
        if (num <= first) {
            // Found the smallest element so far
            first = num;
        } else if (num <= second) {
            // Found an element bigger than 'first' but smaller than 'second'
            second = num;
        } else {
            // Found an element bigger than both 'first' and 'second'
            // This is our triplet!
            return true;
        }
    }

    return false;
};