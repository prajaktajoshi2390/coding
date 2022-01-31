function reverseString1(str) {
  return str.split("").reverse().join("");
};

function reverseString2(str) {
  let reversed = '';
  for(let char of str) {
    reversed = char + reversed;
  };
  debugger;
  return reversed;
};

function reverseString3(str) {
  return str.split('').reduce((reversed, char) => {
    return char + reversed;
  }, '');
};

var reverseString4 = function(s) {
  // return s.reverse();
  let str = s.join("");
  let reversed = '';
  for(let char of str) {
      reversed = char + reversed;
  }
  return reversed.split("");
};

console.log("reversed String is 1 ----", reverseString1("hello"));
console.log("reversed String is 2 ----", reverseString2("hello"));
console.log("reversed String is 3 ----", reverseString3("hello"));
console.log("reversed String is 4 ----", reverseString4(['h','e','l','l','o']));