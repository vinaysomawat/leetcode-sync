/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let str = n.toString(2).split('').reverse().join('');
    return parseInt(n.toString(2).split('').reverse().join('') + Array(32-str.length).fill(0).join(''),2);
};