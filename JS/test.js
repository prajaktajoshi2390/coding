var obj1 = {
  a: "A"
}
var obj2 = obj1;
obj1.b = "B";
obj2.c = "C";
console.log(obj2.a);
console.log(obj2.b);
console.log(obj1.c);