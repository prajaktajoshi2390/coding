function moveZeroes(arr) {
  let counter = 0;
  const n = arr.length;
  for(let i=0; i<n; i++) {
    if(arr[i] === 0) {
      if(i+counter === n) {
        return arr;
      }
      arr.splice(i, 1);
      arr.push(0);
      counter++;
      i--;
    }
  }
  return arr;
}
console.log(moveZeroes([0,1,0,3,12]));