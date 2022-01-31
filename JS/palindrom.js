function palindrom1(str) {
  const reverse = str.split('').reverse().join('');
  return str === reverse;
};

function palindrom2(str) {
  return str.split('').every((char, index) => {
    return char === str[str.length - index - 1];
  });
};

console.log('is string palindrom?', palindrom1('abcba'));
console.log('is string palindrom?', palindrom2('abcba'));