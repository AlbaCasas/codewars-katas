function squareDigits(num) {
  const list = (num + "").split("");
  return +list.map((n) => n ** 2).join("");
}

console.log(squareDigits(9119));
