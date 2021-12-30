function findAverage(list) {
  let sum = 0;
  list.forEach((number) => {
    sum += number;
  });

  if (list.length === 0) {
    return 0;
  }
  return sum / list.length;
}
console.log(findAverage([23, 6, 70, 348]));
