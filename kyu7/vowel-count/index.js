function getCount(str) {
  let vowelsCount = 0;
  const charList = str.split("");
  charList.forEach((char) => {
    if (["a", "e", "i", "o", "u"].includes(char)) {
      vowelsCount++;
    }
  });

  return vowelsCount;
}

console.log(getCount("hola"));
