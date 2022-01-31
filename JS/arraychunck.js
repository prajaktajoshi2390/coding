function arraychunk1 (arr, size) {
  let chunckedArray = [];

  for(let i=0; i<arr.length; i=i+size) {
    chunckedArray.push(arr.slice(i, i+size));
  }
  return chunckedArray;
}

function arraychunk2 (arr, size) {
  let chunckedArray = [];

  for(let i of arr) {
    let last = chunckedArray[chunckedArray.length-1];
    if( !last || last.length === size ) 
    {
      chunckedArray.push([i]);
    } else {
      last.push(i);
    }
  }
  return chunckedArray;
}

console.log("example 1", arraychunk1([1,2,3,4], 2));
console.log("example 1", arraychunk1([1,2,3,4,5], 2));
console.log("example 1", arraychunk1([1,2,3,4,5,6,7,8], 3));
console.log("example 1", arraychunk1([1,2,3,4], 5));


console.log("example 2", arraychunk2([1,2,3,4], 2));
console.log("example 2", arraychunk2([1,2,3,4,5], 2));
console.log("example 2", arraychunk2([1,2,3,4,5,6,7,8], 3));
console.log("example 2", arraychunk2([1,2,3,4], 5));