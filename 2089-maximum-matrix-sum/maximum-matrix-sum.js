/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxMatrixSum = function(matrix) {
    let count = 0;
    let min = Infinity;
    let sum=0;
    matrix.forEach(item => {
        item.forEach(temp => {
            if(temp<0) count++;
            min = Math.min(min, Math.abs(temp));
            sum += Math.abs(temp);
        })
    });
    if(count%2==0) return sum;
    else return sum-2*min;
};