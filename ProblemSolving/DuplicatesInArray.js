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


function findDuplicates(arr) {
  const frequency = {};
  const duplicates = [];

  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];


    frequency[value] = (frequency[value] || 0) + 1;

    if (frequency[value] === 2) {
      duplicates.push(value);
    }
  }

  return duplicates;
}

console.log("Duplicates:", findDuplicates(input_array));


function findDuplicates(arr) {
  const frequency = new Map();
  const duplicates = [];

  for (let value of arr) {


    const count = frequency.get(value) || 0;

 
    frequency.set(value, count + 1);

    if (count + 1 === 2) {
      duplicates.push(value);
    }
  }

  return duplicates;
}

console.log("Duplicates:", findDuplicates(input_array));


