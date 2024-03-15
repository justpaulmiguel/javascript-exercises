const fibonacci = function (num) {
    let num1 = 0, num2 = 1, temp =0;
    if(num <0){
        return 'OOPS';
    }
    else{
        for (i = 0; i <= num; i++) {
      temp = num1;
      num1 = num2;
      num2 = temp;
      num1 += num2;
    } 
    }
    return num2;
};

// Do not edit below this line
module.exports = fibonacci;
