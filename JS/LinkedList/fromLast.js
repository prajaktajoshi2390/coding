const {Node, LinkedList} = require('./index');

function fromLast(list, n) {
  let slow = list.head;
  let fast = list.head;
  
  slow = slow.next;
  for(let i = 0; i<n; i++) {
    fast = fast.next;
  }
  while(fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
}

const l = new LinkedList();
l.insertLast('a');
l.insertLast('b');
l.insertLast('c');
l.insertLast('d');

console.log(fromLast(l, 2).data);