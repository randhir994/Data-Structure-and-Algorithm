function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const str1Map = mapBuilder(str1);
  const str2Map = mapBuilder(str2);

  for (let key in str1Map) {
    if (str1Map[key] !== str2Map[key]) return false;
  }

  return true;
}

function mapBuilder(str) {
  let map = {};
  for (let char of str) {
    map[char] = map[char] + 1 || 1;
  }
  return map;
}

console.log(validAnagram("anagram", "nagaram"));
console.log(validAnagram("rat", "car"));
