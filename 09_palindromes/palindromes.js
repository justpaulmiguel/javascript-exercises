const palindromes = function (string) {
  const alphanumeric = "abcdefghijklmnopqrstuvwxyz1234567890";
  const clean = string
    .toLowerCase()
    .split("")
    .filter((character) => alphanumeric.includes(character))
    .join("");

  let string1 = "";
  for (i = 1; i <= clean.length; i++) {
    string1 += clean[clean.length - i];
  }
  console.log(clean);
  return string1 === clean;
};

// Do not edit below this line
module.exports = palindromes;
