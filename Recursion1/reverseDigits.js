// function reverseDigits(n) {
//   if (n === 0) return;
//   const digit = n % 10;
//   n = parseInt(n / 10);

//   console.log(digit);

//   reverseDigits(n);
// }

// reverseDigits(1234, 0)

function reverseDigits(n, sum) {
  //   log;
  if (n === 0) return sum;
  const digit = n % 10;
  n = parseInt(n / 10);

  sum = sum * 10 + digit;

  return reverseDigits(n, sum);
}

console.log(reverseDigits(1234, 0));
