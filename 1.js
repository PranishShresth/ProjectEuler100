function multipleof5and3(num) {
  let sum = 0;
  for (var i = 0; i < num; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(multipleof5and3(1000));
