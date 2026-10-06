/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    let arr = [];
    let temp = [];
    for(let i=0;i<s.length;i++) {
        if(s[i]=='(') {
            arr.push('(');
        } else {
            if(arr[arr.length-1] == '(') {
                arr.pop();
            } else {
                temp.push(')');
            }
        }
    }
    return arr.length+temp.length;
};