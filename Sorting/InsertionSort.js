const arr = [4, 1, 3, 2, 5];
const n = arr.length;

for (let i = 1; i < n; i++) {
  let curr = arr[i];
  let prev = i - 1;

  while (prev >= 0 && arr[prev] > curr) {
    arr[prev + 1] = arr[prev];
    prev--;
  }

  arr[prev + 1] = curr;
}

console.log("here is output array", arr);
