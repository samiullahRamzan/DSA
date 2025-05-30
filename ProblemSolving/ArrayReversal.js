let given_array = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
const reverseArray = (arr) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    // Swap elements
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    left++;
    right--;
  }

  return arr;
};
console.log("Here is the reversed array:", reverseArray(given_array));
