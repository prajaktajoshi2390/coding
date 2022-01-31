const Node = require('./index');

function levelwidth(root) {
  let counters = [0];
  let arr = [root, 's'];

  while(arr.length > 1) {
    const node = arr.shift();
    if(node !== 's') {
      arr.push(...node.children);
      counters[counters.length - 1]++;
    } else {
      arr.push('s');
      counters.push(0);
    }
  }
  return counters;
}