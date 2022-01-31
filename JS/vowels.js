function vowels1(str) {
  let count = 0;
  for (let char of str) {
    if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
      count = count + 1;
    }
  }
  return count;
}

function vowels2(str) {
  let count = 0;
  const vow = ["a", "e", "i", "o", "u"];
  for (let char of str.toLowerCase()) {
    if(vow.includes(char)) {
      count = count + 1;
    }
  }
  return count;
}

function vowels3(str) {
  const matched = str.match(/[aeiou]/gi);
  return matched ? matched.length : 0;
}

console.log("example 1", vowels1("Hi There!"));
console.log("example 2", vowels1("Why do you ask?"));
console.log("example 3", vowels1("Why?"));

console.log("example 1", vowels2("Hi There!"));
console.log("example 2", vowels2("Why do you ask?"));
console.log("example 3", vowels2("Why?"));

console.log("example 1", vowels3("Hi There!"));
console.log("example 2", vowels3("Why do you ask?"));
console.log("example 3", vowels3("Why?"));