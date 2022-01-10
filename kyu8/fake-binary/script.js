function fakeBin(numbers) {
  const listNumbers = numbers.split("");
  const result = listNumbers.map((n) => {
    if (+n < 5) {
      return 0;
    }
    return 1;
  });
  return result.join("");
}

console.log(fakeBin("45385593107843568"));
