class Node {
  constructor(data, next=null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;
    if(!this.head) {
      return 0;
    }
    let node = this.head;
    while(node) {
      counter = counter + 1;
      node = node.next;
    }
    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if(!this.head) {
      return null;
    }
    let node = this.head;
    while(node.next) {
      if(!node.next) {
        return node;
      }
      node = node.next;
    }
    return node;
  }

  clear(){
    this.head = null;
  }

  removeFirst() {
    if(!this.head) {
      return;
    }
    this.head = this.head.next;
  }

  removeLast(){
    if(!this.head) {
      return;
    }
    if(!this.head.next) {
      return;
    }
    let prev = this.head;
    let node = this.head.next;
    while(node.next) {
      prev = node;
      node = node.next;     
    }
    prev.next = null;
  }

  insertLast(data) {
    const lastNode = this.getLast();
    const node = new Node(data);
    if(lastNode) {
      lastNode.next = node;
    } else {
      this.head = node;
    }
  }

  getAt(index) {
    let node = this.head;
    let counter = 0;
    
    while(node) {
      if(counter === index) {
        return node;
      }
      counter = counter + 1;
      node = node.next;
    }
    return null;
  }

  removeAt(index) {  
    if(index === 0 ) { // remove 1st element
      this.head = this.head.next ? this.head.next : null;
      return;
    }
    let prevNode = this.getAt(index-1);
    if(!prevNode || !prevNode.next) {
      return null;
    }
    if(!prevNode.next.next) {
      prevNode.next = null; //remove last element
      return;
    }
    prevNode.next = prevNode.next.next;
  }

  insertAt(data, index) {
    if(!this.head) {
      this.head = new Node(data);
      return;
    }
    if(index === 0 ) {
      this.head = new Node(data, this.head);
      return;
    }
    const prevNode = this.getAt(index-1) || this.getLast();
    if(!prevNode.next) {
      prevNode.next = new Node(data); // insert at last
      return;
    }
    prevNode.next = new Node(data, prevNode.next);
  }

}

// const list = new LinkedList();
// list.insertFirst('a');
// list.insertFirst('b');
// list.insertFirst('c');
// // list.insertFirst('c');
// list.insertFirst('d');
// console.log(list.getAt(1));
// list.removeAt(1);
// console.log(list.getAt(1));
// //console.log(list.size());

module.exports = { Node, LinkedList };