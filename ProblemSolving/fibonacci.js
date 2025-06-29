function fibonacci(n){
    if(n==0||n==1){
        return n;
    }
    let prev=0;
    let next=1;
    let fib=0;

    for(let i=0;i<n-1;i++){
        fib=prev+next;
        
        // update previous and next value..
        prev=next;
        next=fib;
    }

    return fib;
}

// 0,1,1,2,3,5,8,
console.log('here is fibonacci value:',fibonacci(0))

function fibonacci_Recursive(n){
    if(n==0||n==1){
        return n;
    }

    return fibonacci_Recursive(n-1)+fibonacci_Recursive(n-2);
}
// parameter is index value 
console.log("here is fibonacci recursive value:",fibonacci_Recursive(6));