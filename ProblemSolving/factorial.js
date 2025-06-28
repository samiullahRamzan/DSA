function factorial(n){
   let fact=n;

    for(let i=n-1;i>0;i--){
        fact *= i;
    }

    return fact;
}

console.log('here is factorial of 5:', factorial(5));// Output: 120

function factorialRecursive(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorialRecursive(n - 1);
}

console.log('here is factorial of 5:', factorialRecursive(5)); // Output: 5040