
function bubbleSort(arr) {
  console.log("in");
  for(i=0; i<arr.length; i++) {
    for(j=0; j<arr.length-i; j++) {
      if(arr[j] > arr[j+1]) {
        const large = arr[j]; 
        arr[j] = arr[j+1];
        arr[j+1] = large;
      }
    }
  }
  return arr;
}

function selectionSort(arr) {
  for (let i=0; i<arr.length; i++) {
    let minIndex = i;
    for(let j=i+1; j<arr.length; j++) {
      if(arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if(i !== minIndex) {
      const iElement = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = iElement;
    }
  }

  return arr;
}

function mergeSort(arr) {
  if(arr.length === 1) {
    return arr;
  }

  const mid = Math.floor(arr.length/2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let results = [];
  while(left.length && right.length) {
    if(left[0] <= right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }

  return [...results, ...left, ...right];
}

console.log(selectionSort([10, 5, 3, 20]));