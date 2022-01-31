function matrix(n) {
  let results = [];
  for(let i = 1; i<=n; i++) {
    results.push([]);
  }

  let counter = 1;
  let start_row = 0;
  let end_row = n-1;
  let start_column = 0;
  let end_column = n-1;

  while(start_row <= end_row && start_column <= end_column) {
    for(let j=start_column; j<=end_column; j++) {
      results[start_row][j] = counter;
      counter = counter + 1;
    }
    start_row = start_row + 1;
    for(let i=start_row; i<=end_row; i++) {
      results[i][end_column] = counter;
      counter = counter+1;
    }
    end_column = end_column - 1;
    for(let j=end_column; j>=start_column; j--) {
      results[end_row][j] = counter;
      counter = counter + 1;
    }
    end_row = end_row - 1;
    for(let i=end_row; i>=start_row; i--) {
      results[i][start_column] = counter;
      counter = counter+1;
    }
    start_column = start_column + 1;
  }

  return results;
}

console.log("matrix is", matrix(4));