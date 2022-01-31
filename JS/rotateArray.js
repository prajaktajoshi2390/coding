var rotate = function(nums, k) {
  // if(k <= nums.length) {
  //   const slicedNums = nums.splice(nums.length-k);
  //   return nums.unshift(...slicedNums);
  // } else {
  //   return nums.reverse();
  // }

  // for(i=0; i<k; i++) {
  //   const slicedNum = nums.splice(nums.length - 1);
  //   nums.unshift(...slicedNum);
  // }
  // return nums;
  k = k % nums.length;
  const slicedNums = nums.splice(nums.length-k, k);
  const final = nums.unshift(...slicedNums);
  return nums.unshift(...slicedNums);
};

console.log(rotate([1,2,3], 4));