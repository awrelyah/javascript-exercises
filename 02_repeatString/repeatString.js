const repeatString = function(text, num) {
    let newText = "";
    if (num < 0){
        return "ERROR"
    }
    for (i = 0; i < num; i++){
        newText += text;
    }
    return newText;
};

// Do not edit below this line
module.exports = repeatString;


