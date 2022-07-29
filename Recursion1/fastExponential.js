function fastExponential(n) {
  if (n === 0) return 1;
  const cp = fastExponential(n / 2);

  if (n & 1) {
    return cp * cp * 2;
  } else {
    return cp * cp;
  }
}

console.log(fastExponential(3));
