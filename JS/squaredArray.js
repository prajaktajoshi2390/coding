var sortedSquares = function(nums) {
  const squaredNums = nums.map((element) => {
      return element*element;
  });
  return squaredNums.sort((a,b) => {
      return a-b;
  });
};

console.log(sortedSquares([-4,-1,0,3,10]));