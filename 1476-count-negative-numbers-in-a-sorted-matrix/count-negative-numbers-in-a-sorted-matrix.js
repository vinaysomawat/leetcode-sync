/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let count = 0;
    grid.forEach(item=> {
        item.forEach(temp => {
            if(temp<0) count++;
        })
    })
    return count;
};