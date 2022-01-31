/*var lengthOfLongestSubstring = function(s) {
  let longest = [];
  let max = 0;
  for( let char of s) {
      if(!longest.includes(char)) {
         longest.push(char);
         max = Math.max(longest.length, max);
      } else {
        longest = longest.slice(longest.indexOf(char) + 1);
        longest.push(char);
      }
  }
  // return Math.max(longest, max);
  return max;
};*/

function lengthOfLongestSubstring(s) {
  let currStr = '';
  let max = 0;

  for(let i=0; i<s.length; i++) {
    if(currStr.includes(s[i])) {
      currStr = currStr.slice(s.indexOf(s[i])+1);
    }

    currStr = currStr + s[i];
    max= Math.max(max, currStr.length);
  }

  return max;
}

console.log(lengthOfLongestSubstring('pwhwkfgek'));