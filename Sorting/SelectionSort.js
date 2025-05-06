const arr = [4, 1, 3, 2, 5];
const n = arr.length;
let copy_element;

for (let i = 0; i < n - 1; i++) {
  let small_index = i;
  for (let j = i + 1; j < n; j++) {
    if (arr[j] < arr[small_index]) {
      small_index = j;
    }
  }

  // swap elements on smallest index
  copy_element = arr[small_index];
  arr[small_index] = arr[i];
  arr[i] = copy_element;
}

console.log("here is output array", arr);
