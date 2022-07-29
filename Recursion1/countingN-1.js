function countingNTo1(n) {
  if (n === 1) {
    console.log(1);
    return 1;
  }
  console.log(n);
  countingNTo1(n - 1);
}

countingNTo1(5);
