function strlen(str) {
  return str.split("").reduce((accu, cur) => {
    return accu + 1;
  }, 0);
}

console.log(strlen("fdsfdsf"));
