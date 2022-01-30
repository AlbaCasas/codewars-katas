function oddOrEven(array) {
  if (array.length !== 0) {
    const reducer = (a, b) => a + b;
    const result = array.reduce(reducer);
    if (result % 2 === 0) {
      return "even";
    }
    return "odd";
  }
  return "even";
}

console.log(oddOrEven([-2, 3]));
