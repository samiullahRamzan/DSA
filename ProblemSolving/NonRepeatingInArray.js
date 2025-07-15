const input_array = [1, 2, 3, 4, 1, 1, 5, 1, 2, 3,5,6,10];

function findNonRepeating(arr) {
  const nonRepeatedElements = [];
  for (let i = 0; i < arr.length; i++) {
    
    let skipElement=false;
    for (let j = 0; j < arr.length; j++) {
      if (i!=j&&arr[i] === arr[j]) {
        skipElement=true;
        break;
      }
    }

    if(!skipElement){
        nonRepeatedElements.push(arr[i]);
    }

  }
  return nonRepeatedElements;
}

console.log("Non repeating in the array:", findNonRepeating(input_array));
