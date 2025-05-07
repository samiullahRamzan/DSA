const arr = [4, 1, 3, 2, 5];
const n = arr.length;

function mergeSort(arr, start, end) {
  if (start < end) {
    const mid = Math.floor((start + end) / 2);

    mergeSort(arr, start, mid); // for left half
    mergeSort(arr, mid + 1, end); // for right half

    merge(arr, start, mid, end);
  }
}

function merge(arr, start, mid, end) {
  let temp = []; // temporary array
  let i = start,
    j = mid + 1;

  while (i <= mid && j <= end) {
    if (arr[i] <= arr[j]) {
      temp.push(arr[i]);
      i++;
    } else {
      temp.push(arr[j]);
      j++;
    }
  }

  // for left half , if remaining elements
  while (i <= mid) {
    temp.push(arr[i]);
    i++;
  }

  // for right half , if remaining elements
  while (j <= end) {
    temp.push(arr[j]);
    j++;
  }

  for (let index = 0; index < temp.length; index++) {
    arr[index + start] = temp[index];
  }
}

mergeSort(arr, 0, n - 1);

console.log("here is output array", arr);
