const reverseString = function(text) {
    const splitArray = text.split("");
    const reverseArray = splitArray.reverse();
    const joinArray = reverseArray.join("");
    return joinArray;

};

// Do not edit below this line
module.exports = reverseString;
