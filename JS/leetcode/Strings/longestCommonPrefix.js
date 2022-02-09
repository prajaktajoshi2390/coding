/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
*/

var longestCommonPrefix = function(strs) {
  let longest = "";
  let current = "";
  for(let i=0; i<strs[0].length; i++) {
      current = longest + strs[0][i];
      const presentInAll = strs.every((word, index) => {
          return word.slice(0, current.length) === current;
      });
      if(presentInAll) {
          longest = current;
      } else {
          return longest;
      }
  }
  return longest;
};