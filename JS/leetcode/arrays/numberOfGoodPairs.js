/*
Given an array of integers nums, return the number of good pairs.

A pair (i, j) is called good if nums[i] == nums[j] and i < j.

 

Example 1:

Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var numIdenticalPairs = function(nums) {
  let count = 0;
  for(let i=0; i<nums.length; i++) {
      let startIndex = i+1;
      while(nums.indexOf(nums[i], startIndex) > -1)
      {
          count++;
          startIndex = nums.indexOf(nums[i], startIndex) + 1;
      } 
  }
  return count;
};