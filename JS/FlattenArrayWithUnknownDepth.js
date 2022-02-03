function flat(data, results=[]) {
  if(Array.isArray(data)) {
    data.map((element) => {
      flat(element, results);
    });
  } else {
    results.push(data);
  }
  return results;
}
console.log(flat([1, 2, [3, 4, [5, 6]]]));