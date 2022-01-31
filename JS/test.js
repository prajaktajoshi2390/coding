class LinkedList {
  constructor() {
    this.head = null;
  }

  midpoint() {
    let slow = this.head;
    let fast =this.head;

    while(fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    return slow;
  }
}

const l = new LinkedList();
l.insertLast('a');
l.insertLast('b');
l.insertLast('c');
l.insertLast('d');
l.insertLast('e');
console.log(midpoint(l));