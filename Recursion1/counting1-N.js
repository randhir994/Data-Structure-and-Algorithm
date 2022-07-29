function counting1ToN(n) {
  if (n === 1) {
    console.log(1);
    return 1;
  }
  counting1ToN(n - 1);
  console.log(n);
}

counting1ToN(5);
