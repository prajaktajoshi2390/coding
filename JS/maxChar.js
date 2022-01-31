function maxchar(str) {
  let chars = {};
  for (let char of str) {
    chars[char] = chars[char] == null ? 1 : chars[char] + 1;
  };
  console.log(chars);


  let max = 0;
  let maxChar = '';
  for (let key in chars) {
    if(chars[key] > max) {
      max = chars[key];
      maxChar = key;
    }
  }
  return maxChar;

}

console.log("maximum times appearing character", maxchar("apple"));