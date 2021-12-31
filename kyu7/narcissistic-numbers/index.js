function isNarcissistic(number) {
  let countNumber = 0;
  const length = number.toString().length;
  number
    .toString()
    .split("")
    .forEach((char) => {
      countNumber += parseInt(char) ** length;
    });
  if (countNumber === number) {
    return true;
  }
  return false;
}

console.log(isNarcissistic(153));
