function largestSumContiguousSubArray(arr) {
  let maxSum = -Infinity;
  let currentSum = 0;
  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];
    if (maxSum < currentSum) {
      maxSum = currentSum;
    }

    if (currentSum < 0) {
      currentSum = 0;
    }
  }
  return maxSum;
}

console.log(largestSumContiguousSubArray([-2, -3, 4, -1, -2, 1, 5, -3]));
