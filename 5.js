function smallestMult(n) {
  const primefactors = (num, n) => {
    for (let i = Math.floor(Math.sqrt(n)); i <= n; i++) {
      if (num % i !== 0) {
        return false;
      }
    }
    return true;
  };

  for (let i = n; ; i += n) {
    if (primefactors(i, n)) return i;
  }
}

console.log(smallestMult(20));
