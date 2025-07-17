const input_array = [1, 2, 3, 4, 1, 5, 2, 6];

function findNonRepeated(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    let count = 0;

    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }

    if (count === 1) {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log('Non-repeated elements:', findNonRepeated(input_array));

// using freuency map in javascript..
function findNonRepeating(arr) {
  const freq = {}; // frequency map
  const result = [];

  // Step 1: Count frequency of each element
  for (let i = 0; i < arr.length; i++) {
    freq[arr[i]] = (freq[arr[i]] || 0) + 1;
  }

  // Step 2: Collect elements that appear only once
  for (let i = 0; i < arr.length; i++) {
    if (freq[arr[i]] === 1) {
      result.push(arr[i]);
    }
  }

  return result;
}

function findNonRepeat(arr) {
  const freqMap = new Map(); // true hashmap

  // Step 1: Count frequency of each element
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (freqMap.has(value)) {
      freqMap.set(value, freqMap.get(value) + 1);
    } else {
      freqMap.set(value, 1);
    }
  }

  // Step 2: Collect elements with frequency === 1
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (freqMap.get(arr[i]) === 1) {
      result.push(arr[i]);
    }
  }

  return result;
}
;


