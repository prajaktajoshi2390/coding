function capitalize1(str) {
  let splitted = str.split(" ");
  splitted = splitted.map((word)=>{
    const first = word[0].toUpperCase();
    const rest = word.slice(1);
    debugger;
    return first + rest;
  });
  return splitted.join(" ");

}

function capitalize2(str) {
  str = str[0].toUpperCase() + str.slice(1);

  let updatedStr = "";
  for(let char of str) {
    if(str[str.indexOf(char) - 1] === " ") {
      updatedStr = updatedStr + char.toUpperCase();
    } else {
      updatedStr = updatedStr + char;
    }
  }

  return updatedStr;

}

console.log("example 1", capitalize1("a short sentence"));
console.log("example 1", capitalize1("look, it is working!"));

console.log("example 1", capitalize2("a short sentence"));
console.log("example 1", capitalize2("look, it is working!"));