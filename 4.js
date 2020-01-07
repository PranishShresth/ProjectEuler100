function largestPalindromeProduct(n) {
  let palin = [];
  let iterations = Math.pow(10, n);
  for (var i = 1; i < iterations; i++) {
    for (var j = 1; j < iterations; j++) {
      let possibleproducts = i * j;
      if (
        possibleproducts ==
        possibleproducts
          .toString()
          .split("")
          .reverse()
          .join("")
      ) {
        palin.push(possibleproducts);
      }
    }
  }
  return Math.max(...palin);
}

console.log(largestPalindromeProduct(3));
