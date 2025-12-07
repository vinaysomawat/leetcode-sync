/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    let diff = high - low;
    if (low % 2 === 1 || high % 2 === 1) {
        return Math.floor(diff / 2) + 1;
    }
    return Math.floor(diff / 2);
};