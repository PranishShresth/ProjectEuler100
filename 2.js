function fiboEvenSum(n) {
  let myarr = [1, 2];
  var a = 1;
  var b = 2;
  for (var i = 0; i < n - 2; i++) {
    var c = a + b;
    myarr.push(c);
    a = b;
    b = c;
  }
  return myarr.filter(x => x % 2 == 0).reduce((y, z) => y + z, 0);
}
console.log(fiboEvenSum(10));
