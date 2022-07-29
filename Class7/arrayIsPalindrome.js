function arrayIsPalindrome(arr) {
  let statIndex = 0;
  let lastIndex = arr.length - 1;

  while (statIndex < lastIndex) {
    if (arr[statIndex] !== arr[lastIndex]) return false;
    statIndex++;
    lastIndex--;
  }

  return true;
}

console.log(arrayIsPalindrome([3, 6, 0, 6, 3]));
console.log(arrayIsPalindrome([1, 2, 3, 4, 5]));
