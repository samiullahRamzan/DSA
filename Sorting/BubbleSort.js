const arr = [1, 2, 3, 4, 5];
const n = arr.length;
let small_element = 0;
let isSwap = false; // when array is sorted then we can optimize it using this variable .. but time complexity will also be n^2

for (let i = 0; i < n - 1; i++) {
  for (let j = 0; j < n - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      // swap elements
      small_element = arr[j + 1];
      arr[j + 1] = arr[j];
      arr[j] = small_element;

      isSwap = true;
    }
  }
  if (!isSwap) {
    break;
  }
}

console.log("here is output array", arr);
