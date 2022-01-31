const Stack = require('./Stack');

class Queue {
  constructor() {
    this.s1 = new Stack();
    this.s2 = new Stack();
  }

  add(record) {
    this.s1.push(record);
  }

  remove() {
    while(this.s1.peek()) {
      this.s2.push(this.s1.pop());
    }
    const record = this.s2.pop();

    while(this.s2.peek()) {
      this.s1.push(this.s2.pop());
    }

    return record;
  }

  peek() {
    while(this.s1.peek()) {
      this.s2.push(this.s1.pop());
    }
    const record = this.s2.peek();

    while(this.s2.peek()) {
      this.s1.push(this.s2.pop());
    }

    return record;
  }

}

const q = new Queue();
q.add(1);
q.add(2);
console.log(q.peek());
console.log(q.remove());
console.log(q.remove());