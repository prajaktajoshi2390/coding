const {Node, LinkedList} = require('./index');

function circular(list) {
  let slow = list.head;
  let fast = list.head;
  
  while(fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
    
    if(slow === fast) {
      return true;
    }
  }
  return false;
}

const l = new LinkedList();
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');

l.head = a;
a.next = b;
b.next = c;
c.next = b;

console.log(circular(l));