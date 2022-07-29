function fibonnaciSeries(n, index = 0, arr = []) {
  if (index > n - 1) return arr;
  if (index === 0) {
    arr.push(0);
  } else if (index === 1) {
    arr.push(1);
  } else {
    arr.push(arr[index - 2] + arr[index - 1]);
  }

  return fibonnaciSeries(n, index + 1, arr);
}

console.log(fibonnaciSeries(10));
