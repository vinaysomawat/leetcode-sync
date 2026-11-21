/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let index = [];
    let vowl = [];
    for(let i=0;i<s.length;i++) {
        if(['a','e','i','o','u'].includes(s[i].toLowerCase())) vowl.push(s[i]);
    }
    let temp = s.split('');
    for(let i=0;i<temp.length;i++) {
        if(['a','e','i','o','u'].includes(s[i].toLowerCase())) {
            temp[i] = vowl.pop();
        }
    }
    return temp.join('');
};