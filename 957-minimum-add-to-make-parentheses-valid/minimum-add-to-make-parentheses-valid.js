/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    let arr = 0;
    let temp = 0;
    for(let i=0;i<s.length;i++) {
        if(s[i]=='(') arr++;
        else if(arr>0) arr--;
        else temp++;

    }
    return arr+temp;
};