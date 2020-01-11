function sumSquareDifference(n) {
  let myarray = [];
  for (var i = 1; i <= n; i++) {
    myarray.push(i);
  }
  var sumofsquares = myarray
    .map(x => Math.pow(x, 2))
    .reduce((acc, curr) => acc + curr, 0);
  var squaredsum = Math.pow(
    myarray.reduce((acc, curr) => acc + curr, 0),
    2
  );
  return squaredsum - sumofsquares;
}

console.log(sumSquareDifference(10));
