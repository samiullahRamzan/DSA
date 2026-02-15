const arr = ['flow', 'flower', 'flo'];

let prefix = '';

for (let j = 0; j < arr[0].length; j++) {
    let char = arr[0][j];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i][j] !== char) {
            console.log('Longest Common Prefix:', prefix);
            return;
        }
    }

    prefix += char;
}

console.log('Longest Common Prefix:', prefix);
