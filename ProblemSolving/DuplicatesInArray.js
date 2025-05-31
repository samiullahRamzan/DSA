const input_array = [1, 2, 3, 4, 1, 1, 5, 1, 2, 3];

function findDuplicates(arr) {
  const duplicates = [];
  for (let i = 0; i < arr.length; i++) {
    if (elementExists(duplicates, arr[i])) {
      continue;
    }

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        duplicates.push(arr[i]);
        break;
      }
    }
  }

  return duplicates;
}

function elementExists(arr, element) {
  for (let item of arr) {
    if (item === element) {
      return true;
    }
  }
  return false;
}
console.log("Duplicates in the array:", findDuplicates(input_array));
