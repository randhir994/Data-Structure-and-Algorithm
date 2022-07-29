function printDigits(n) {
  if (n === 0) return;
  const digit = n % 10;
  n = parseInt(n / 10);

  printDigits(n);
  console.log(digit);
}

printDigits(1234);
