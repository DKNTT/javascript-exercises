const reverseString = function (string) {
    let newString = '';
    for (i = 1; i < string.length + 1; i++) {
        newString += string.at(-i);
    }
    return newString;
};
// Do not edit below this line
module.exports = reverseString;

