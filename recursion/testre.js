function test() {
  i = 0;
  return () => {
    return i++;
  };
}

a = test();
console.log(a());
console.log(a());
