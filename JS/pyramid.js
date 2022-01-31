function pyramid1 (n) {
  const numOfCols = 2*n-1;
  const middleIndex = Math.ceil(numOfCols/2);
  for(let i=1; i<=n; i++) {
    let str = "";
    for(let j=1; j<=numOfCols; j++) {     
      if(j > middleIndex - i && j < middleIndex + i) {
        str = str + "#";
      } else{
        str = str + " ";
      }
    }
    console.log(str);
  }
}

// recursive solution is npot correct
function pyramid2(n, row=1, str="") {
  const numOfCols = 2*n-1;
  const middleIndex = Math.ceil(numOfCols/2);
  const lastCharIndex = str.length;
  if (n === row) {
    return;
  }

  if (str.length === numOfCols) {
    console.log(str);
    return pyramid2(n, row + 1, "");
  }

  if( lastCharIndex > middleIndex - row && lastCharIndex < middleIndex + row) {
    str = str + "#";
  } else {
    str  = str + " ";
  }
  pyramid2(n, row, str);
}
console.log(pyramid1(3));
console.log(pyramid2(3));