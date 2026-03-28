const arr=[1,2,3,4];
const newArr=[];

for(let i=0;i<arr.length;i++){
    newArr[i]=1;
    for(let j=0;j<arr.length;j++){
       
        if(i!=j){
            newArr[i]*=arr[j]
        }
    }
}

console.log('here is arr',arr);
console.log('here is new array...',newArr);