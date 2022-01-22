function accum(s) {
  let result = [];
  s.split("").forEach((char, i) => {
    const charCombo = char.toUpperCase() + char.toLowerCase().repeat(i);
    result.push(charCombo);
  });
  return result.join("-");
}

console.log(accum("aBc"));
