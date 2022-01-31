const {Node, LinkedList} = require('./index');

function midpoint(list) {
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
l.insertLast('a');
l.insertLast('b');
l.insertLast('c');
l.insertLast('d');
l.insertLast('e');
console.log(midpoint(l));