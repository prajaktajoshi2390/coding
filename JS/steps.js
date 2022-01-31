// Also check recursion solution (solution number 2) from video.
function steps(n) {
  
  for(let i=1; i<=n; i++) {
    let str = "";
    for(let j=1; j<=n; j++) {
      if(j<=i){
        str = str + "#";
      } else {
        str = str + " ";
      }
    }
    console.log(str);
  }
  // return str;
}

console.log(steps(3));