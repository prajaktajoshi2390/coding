function fib1(n) {
  let fibs = [0, 1];
  for (let i=2; i<=n; i++) {
    fibs.push(fibs[i-1]+fibs[i-2]);
  }
  return fibs[n];
}

function fib2(n, fibs=[0,1]) {
  const curentIndex = fibs.length-1;
  if(curentIndex === n) {
    return fibs[n];
  }
  fibs.push(fibs[curentIndex]+fibs[curentIndex-1]);
  return fib2(n, fibs);
}

// this is a solution with exponential complexity
function fib3(n) {
  if (n < 2) {
    return n;
  }

  return fib3(n-1) + fib3(n-2);
}

// solve above complexity issue by memoizaion
function memoize (fn) {
  const cache = {};
  return function(... args) { // this will return a fast function
    if(cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  }
}

function slowFib(n) {
  if (n<2) {
    return n;
  }
  return fib(n-1) + fib(n-2);
}

const fib = memoize(slowFib);

console.log("fibonacci entry is", fib1(7));
console.log("fibonacci entry is", fib2(7));
console.log("fibonacci entry is", fib3(7));
console.log("fibonacci entry is", fib(7));