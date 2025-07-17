const input_array = [1, 2, 3, 4, 1, 1, 5, 1, 2, 3, 5];

function findDuplicates(arr) {
  const duplicates = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
        duplicates.push(arr[i]);
        break; 
      }
    }
  }

  return duplicates;
}

console.log('find duplicates in array!', findDuplicates(input_array));


// duplicates using real hashmap
