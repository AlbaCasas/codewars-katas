function twoOldestAges(ages) {
  const listSort = ages.sort(function (a, b) {
    return a - b;
  });
  const result = listSort.slice(-2);
  return result;
}

console.log(twoOldestAges([1, 5, 87, 45, 8, 8]));
