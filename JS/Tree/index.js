class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }
  add(data) {
    this.children.push(new Node(data));
  }

  remove(data) {
    this.children = this.children.filter(node => {
      return node.data !== data;
    });
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBF(fn) {
    let arr = [this.root];
    while(arr.length) {
      const node = arr.shift();
      arr.push(...node.children);
      // OR
      // for(child of arr.children) {
      //   arr.push(child);
      // }
      fn(node);
    }  
  }

  traverseDF(fn) {
    let arr = [this.root];
    while(arr.length) {
      const node = arr.shift();
      arr.unshift(...node.children);
      fn(node);
    }
  }
}

module.exports({Node, Tree});