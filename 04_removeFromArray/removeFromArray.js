const removeFromArray = function(array, argument, ...theArgs) {
    if (theArgs.length == 0){
        const newArray = array.filter(item => item !== argument);
        return newArray;

    } else if (theArgs.length >= array.length - 1){ // removes all elements
        array = [];
        return array;

    } else if(theArgs.length > 0){
        const newArray = array.filter(item => item !== argument);
        let newArray2 = [];
        
        for (i=0; i< theArgs.length; i++){
            newArray2 = newArray.filter(item => item !== theArgs[i]);
        }
        return newArray2;

    } 

};

// Do not edit below this line
module.exports = removeFromArray;
