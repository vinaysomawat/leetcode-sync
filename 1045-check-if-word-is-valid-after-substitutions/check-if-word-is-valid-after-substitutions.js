/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    for(let ch of s) {
        stack.push(ch);
        if(stack.length>=3 &&
        stack[stack.length-3]=='a' && 
        stack[stack.length-2]=='b' &&
        stack[stack.length-1]=='c') {
            stack.pop();
            stack.pop();
            stack.pop();
        }
    }
    return stack.length==0;
};