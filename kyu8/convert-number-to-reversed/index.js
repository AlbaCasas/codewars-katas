function digitize(n) {
  return n
    .toString()
    .split("")
    .reverse()
    .map((n) => {
      return parseInt(n);
    });
}

console.log(digitize(34));
