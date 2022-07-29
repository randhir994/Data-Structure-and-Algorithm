function minimumFilps(str) {
  const startWithZero = flipCounter(str, "0");
  const startWithOne = flipCounter(str, "1");
//   console.log(startWithZero, startWithOne);
  return startWithZero < startWithOne ? startWithZero : startWithOne;
}

function flipCounter(str, expected) {
  let countFlip = 0;
  for (let char of str) {
    if (char !== expected) {
      countFlip++;
    }
    expected = flip(expected);
  }
  return countFlip;
}

function flip(expected) {
  if (expected === "0") return "1";
  return "0";
}

console.log(minimumFilps("01001001101"));
console.log(minimumFilps("0001010111"));
console.log(minimumFilps("111000"));
console.log(minimumFilps("010"));
console.log(minimumFilps("1110"));
