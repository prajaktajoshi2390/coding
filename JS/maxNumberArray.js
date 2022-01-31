var maxSubArray = function(a) {
  let maxSum = 0, currentSum =0;

  for(let i=0; i<a.length; i++) {
    currentSum = currentSum + a[i];

    if(currentSum > maxSum) {
      maxSum = currentSum;
    }

    if(currentSum < 0) {
      currentSum = 0;
    }
  }
  return maxSum;
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));