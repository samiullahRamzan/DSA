function fibMemoized(n, memo = {}) { // memo is the cache
    if (n in memo) return memo[n]; // Check cache first
    if (n <= 1) return n;

    memo[n] = fibMemoized(n - 1, memo) + fibMemoized(n - 2, memo); // Store result
    return memo[n];
}

console.log(fibMemoized(7));