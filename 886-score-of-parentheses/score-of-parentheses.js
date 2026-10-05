/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function (s) {
    let count = 0;
    let depth = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(') { 
            depth++;
        } else {
            depth--;
            if (s[i-1] == '(') {
                count += Math.pow(2 , depth);
            }
        }
    }
    return count;
};