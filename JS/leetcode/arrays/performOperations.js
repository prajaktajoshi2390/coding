/*
There is a programming language with only four operations and one variable X:

++X and X++ increments the value of the variable X by 1.
--X and X-- decrements the value of the variable X by 1.
Initially, the value of X is 0.

Given an array of strings operations containing a list of operations, return the final value of X after performing all the operations.
*/

/**
 * @param {string[]} operations
 * @return {number}
 */
 var finalValueAfterOperations = function(operations) {
  /*
  // solution 1
  function convertOperation(str, val) {
      str = str.toLowerCase();
      if(str === '++x' || str === 'x++') {
          return val = val+1;
      } else if(str === '--x' || str === 'x--'){
          return val = val - 1;
      }
  }
  
  return operations.reduce((calc, current) => {
      return convertOperation(current, calc);
  }, 0);
  */
  
  let X = 0;
  for (let i = 0; i < operations.length; i++) {
      if (operations[i].includes("+")) X++
      else X--;
  }
  return X;
  
};