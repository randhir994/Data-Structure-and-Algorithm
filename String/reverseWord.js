// var reverseWord = function (str) {
//   return str.split(" ").reverse().join(" ");
// };

var reverseWord = function (str) {
  str = str.split(" ");
  let s = 0;
  let e = str.length - 1;

  while (s < e) {
    swap(str, s, e);
    s++;
    e--;
  }

  return str.join(" ");
};

function swap(s, i, e) {
  const temp = s[i];
  s[i] = s[e];
  s[e] = temp;
}

console.log(reverseWord("i like this program very much"));
