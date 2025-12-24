/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
var minimumBoxes = function(apple, capacity) {
    let total = 0;
    apple.forEach(item => {
        total+=item;
    });
    capacity.sort((a,b)=> b-a);
    let count=0;
    for(let i=0;i<capacity.length;i++) {
        if(total<=0) return count;
        else {
            total -=capacity[i];
            count++;
        }
    }
    return count;
};