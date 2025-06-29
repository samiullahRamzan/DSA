const matrix=[
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,20]
]

function matrixDiagonalSum(matrix){
    let firstDiagonal=0;
    let secondDiagonal=0;
    for(let i=0;i<matrix.length;i++){
        let x=matrix[i].length-1-i;
        for(let j=0;j<matrix[i].length;j++){
            if(i==j){
                firstDiagonal+=matrix[i][j];
            }else if(j==x){
                secondDiagonal+=matrix[i][j];
            }

        }
   }
   return {firstDiagonal,secondDiagonal};
}

let {firstDiagonal,secondDiagonal}=matrixDiagonalSum(matrix);
console.log("here is matrix diagonal sum:",firstDiagonal,secondDiagonal)