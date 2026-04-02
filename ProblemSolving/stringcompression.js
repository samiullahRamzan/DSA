
let chars = ["a","a","b","b","c","c","c","c","c","c","c","c","c","c","c","c","c","c"];

// brute force approach
var compress = function(chars) {
    let write = 0;
    
    for (let i = 0; i < chars.length; i++) {
        let count = 1;
        let currentChar = chars[i];
        
        let j = i + 1;
        for (; j < chars.length; j++) {
            if (chars[i] === chars[j]) {
                count++;
            } else {
                break;
            }
        }
        
        chars[write] = currentChar;
        write++;
        
        if (count > 1) {
            let countStr = count.toString();
            for (let digit of countStr) {
                chars[write] = digit;
                write++;
            }
        }
        
        i = j - 1;
    }
    
    return write; 
}
console.log(compress(chars));