function summation(num) {
  let acc = 0;
  for (let i = 1; i <= num; i++) {
    acc += i;
  }

  return acc;
}

console.log(summation(8));
