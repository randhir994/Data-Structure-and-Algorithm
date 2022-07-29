function stringIsPalindrome(str) {
  const filterStr = str.replace(/[^A-Z0-9]/gi, "").toLowerCase();
  let s = 0;
  let e = filterStr.length - 1;

  while (s <= e) {
    if (filterStr[s] !== filterStr[e]) {
      return "No";
    }
    s++;
    e--;
  }

  return "Yes";
}

console.log(stringIsPalindrome("c1 O$d@eeD o1c"));
