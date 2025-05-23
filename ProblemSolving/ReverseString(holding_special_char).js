let input_str = "ab@k,w";

const isLetterOrNumber = (char) => {
  const code = char.charCodeAt(0);
  return (
    (code >= 65 && code <= 90) || // A–Z
    (code >= 97 && code <= 122) || // a–z
    (code >= 48 && code <= 57) // 0–9
  );
};

const ReverseString = () => {
  // Convert string to array
  let arr = input_str.split("");

  // Initialize two pointers
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (isLetterOrNumber(arr[left]) && isLetterOrNumber(arr[right])) {
      // Swap characters
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;

      left++;
      right--;
    } else if (!isLetterOrNumber(arr[left])) {
      left++;
    } else {
      right--;
    }
  }

  // Join array back into a string
  return arr.join("");
};

console.log("Here is the reverse string:", ReverseString());
