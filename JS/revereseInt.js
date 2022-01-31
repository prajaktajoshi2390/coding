function reverseInt1 (num) {
  const numWithoutSign = num < 0 ? -num : num;
  const reversedStr = numWithoutSign.toString().split('').reverse().join('');
  return num >= 0 ? Number(reversedStr) :  -(Number(reversedStr));
}

function reverseInt2 (num) {
  const numWithoutSign = Math.sign(num) * num;
  const reversed = numWithoutSign.toString().split('').reverse().join('');
  return Math.sign(num) * reversed;
}

console.log("reversed int is", reverseInt1(900));
console.log("reversed int is", reverseInt1(1234));
console.log("reversed int is", reverseInt1(-12));


console.log("reversed int is", reverseInt2(900));
console.log("reversed int is", reverseInt2(1234));
console.log("reversed int is", reverseInt2(-12));