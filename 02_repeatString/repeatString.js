const repeatString = function (string, num) {
  let string1 = "";
  for (let i = num; i > 0; i--) {
    string1 += string;
  }
  if (num < 0) return "ERROR";
  else return string1;
};

// Do not edit below this line
module.exports = repeatString;
