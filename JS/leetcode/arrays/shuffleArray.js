/*
Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

Return the array in the form [x1,y1,x2,y2,...,xn,yn].

 

Example 1:

Input: nums = [2,5,1,3,4,7], n = 3
Output: [2,3,5,4,1,7] 
Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].
*/

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
 var shuffle = function(nums, n) {
  /*
  //solution 1
  const num1 = nums.splice(0, n);
  const results = [];
  for(i=0; i<n; i++) {
      results.push(num1[i]);
      results.push(nums[i]);
  }
  return results;
  */
  let newArr = [];
  for (let i = 0; i < nums.length/2; i++){
      newArr.push(nums[i]);
      newArr.push(nums[i + n]);
  }
  return newArr;
};