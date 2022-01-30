function doubleEveryOther(array) {
  const result = array.map((num, i) => {
    if ((i + 1) % 2 === 0) {
      return num * 2;
    }
    return num;
  });
  return result;
}

console.log(doubleEveryOther([1, 2, 3, 4]));
