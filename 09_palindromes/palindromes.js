const palindromes = function (str) {
    let cleanStr = str.toLowerCase().replace(/[^a-z]/g, "");
    let newStr = cleanStr.split("").reverse().join("");

    return (cleanStr === newStr)

};

// Do not edit below this line
module.exports = palindromes;
