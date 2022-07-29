// var reverseString = function(s) {
//     return s.reverse()

// };

var reverseString = function (s) {
  let i = 0;
  let e = s.length - 1;

  while (i < e) {
    swap(s, i, e);
    i++;
    e--;
  }
  return s;
};

function swap(s, i, e) {
  const temp = s[i];
  s[i] = s[e];
  s[e] = temp;
}
