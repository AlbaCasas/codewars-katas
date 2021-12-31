function incrementer(numbers) {
  const transformedNumbers = numbers.map((number, i) => {
    const newNumber = i + 1 + number;
    return +newNumber.toString().split("").pop();
  });
  return transformedNumbers;
}

console.log(incrementer([4, 6, 9, 1, 3]));
