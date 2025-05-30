const array = ["madam", "racecar", "hello", "world", "level", "noon"];

const isPalindrome = (input_str) => {
  let str = input_str.split("");
  console.log("here is input string:", str);

  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

let no_of_palindromes = 0;
const countPalindromes = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (isPalindrome(arr[i])) {
      no_of_palindromes++;
    }
  }
  return no_of_palindromes;
};

console.log("Number of palindromes in the array:", countPalindromes(array));
