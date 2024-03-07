const removeFromArray = function(array, ...num1) {
    const array1 =[];

    array.forEach(numbers => {
        if(!num1.includes(numbers)){
            array1.push(numbers);
        }
    });
    return array1;
};

// Do not edit below this line
module.exports = removeFromArray;
