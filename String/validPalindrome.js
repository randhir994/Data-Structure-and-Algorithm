var isPalindrome = function (s) {
  const str = s.replace(/[^A-Z0-9]/gi, "").toLowerCase();
  let startIndex = 0;
  let endIndex = str.length - 1;

  while (startIndex < endIndex) {
    if (str[startIndex] !== str[endIndex]) {
      return false;
    }
    startIndex++;
    endIndex--;
  }

  return true;
};

console.log(isPalindrome("0P"));
console.log(isPalindrome("1a2"));
console.log(isPalindrome("A man, a plan, a canal: Panama"));
