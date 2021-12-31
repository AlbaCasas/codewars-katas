function isValid(char) {
  return "abcdefghijklm".split("").includes(char);
}

function printerError(s) {
  let count = 0;
  const length = s.length;
  s.split("").forEach((char) => {
    if (!isValid(char)) {
      count++;
    }
  });
  return `${count}/${length}`;
}

console.log(printerError("aaaxbbbbyyhwawiwjjjwwm"));
