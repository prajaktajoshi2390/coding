function anagram1 (str1, str2) {
  const regex = /[^\w]/g;
  str1 = str1.replace(regex, "").toLowerCase();
  str2 = str2.replace(regex, "").toLowerCase();
  
  if(str1.length !== str2.length) {
    return false;
  }

  const buildCharObj = (str) => {
    let charsStr = {};
    for (let char of str) {
      if (!charsStr[char]) {
        charsStr[char] = 0;
      } else {
        charsStr[char] = charsStr[char] + 1;
      }
    }
    return charsStr;
  };

  let charsStr1 = buildCharObj(str1);
  let charsStr2 = buildCharObj(str2);

  for (let key in charsStr1) {
    if(charsStr1[key] !== charsStr2[key]) {
      return false;
    }
  }

  return true;
}


function anagram2 (str1, str2) {
  str1 = str1.replace(/[^\w]/g, "").toLowerCase().split("").sort().join();
  str2 = str2.replace(/[^\w]/g, "").toLowerCase().split("").sort().join();

  return str1 === str2;
}

console.log("anagram example 1", anagram1("rail safety", "fairy tales"));
console.log("anagram example 2", anagram1("Rail! safety", "fairy tales"));
console.log("anagram example 3", anagram1("Hi There", "Bye there"));


console.log("anagram example 1", anagram2("rail safety", "fairy tales"));
console.log("anagram example 2", anagram2("Rail! safety", "fairy tales"));
console.log("anagram example 3", anagram2("Hi There", "Bye there"));
