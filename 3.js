function largestPrimeFactor(num) {
  var myprimefactors = [];

  if (num.toString().length == 1) {
    return num;
  } else {
    for (var i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        var is_prime = false;
      }
      is_prime = true;
    }

    for (var i = 2; i <= num; i++) {
      while (is_prime === true && num % i === 0) {
        if (myprimefactors.indexOf(i) == -1) myprimefactors.push(i);
        num /= i;
      }
    }
    return myprimefactors.pop();
  }
}

console.log(largest_prime_factors(13195));
