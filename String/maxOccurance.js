function maxOccurance(str) {
  let map = {};
  let maxValue = -Infinity;
  let maxChar = "";

  for (let i = 0; i < str.length; i++) {
    map[str[i]] = map[str[i]] + 1 || 1;
  }

  for (let key in map) {
    if (map[key] > maxValue) {
      maxValue = map[key];
      maxChar = key;
    }
  }

  return maxChar;
}

console.log(maxOccurance("testsample"));
