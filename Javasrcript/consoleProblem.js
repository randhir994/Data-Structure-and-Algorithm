function f2(arr) {
  arr["1"] = 1;
  console.log(arr);
}
function f1() {
  let arr = {};
  f2(arr);
  console.log(arr);
}

f1();
