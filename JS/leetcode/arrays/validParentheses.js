/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order. 
*/

/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
  const results = [];
  for(let char of s) {
      if(char === '(' || char === "{" || char === "[") {
          results.push(char);
      }
      
      if(results.length === 0) {
          return false;
      }
      
      if(char === ")") {
          const last = results.pop();
          if(last === '{' || last === "[") {
              return false;
          }
      } else if(char === "]") {
          const last = results.pop();
          if(last === '{' || last === "(") {
              return false;
          }
      } else if(char === "}") {
          const last = results.pop();
          if(last === '(' || last === "[") {
              return false;
          }
      }
          
  }
  if(results.length === 0) {
      return true;
  } 
  return false;
};