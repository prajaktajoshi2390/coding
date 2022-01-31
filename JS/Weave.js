const Queue = require('./queue');

function weave(sourceOne, sourceTwo) {
  const combineQueue = new Queue();
  
  while(sourceOne.peek() || sourceTwo.peek()){
    if(sourceOne.peek()) {
      combineQueue.add(sourceOne.remove());
    }

    if(sourceTwo.peek()) {
      combineQueue.add(sourceTwo.remove());   
    }
  }

  return combineQueue;
}

const queueOne = new Queue();
queueOne.add('1');
queueOne.add('2');

const queueTwo = new Queue();
queueTwo.add('Hi');
queueTwo.add('There');

const q = weave(queueOne, queueTwo);
console.log(q.remove());
console.log(q.remove());
console.log(q.remove());
console.log(q.remove());
