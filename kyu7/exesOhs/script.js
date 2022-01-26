function xo(str) {
  let x = 0;
  let o = 0;
  str.split("").forEach((char) => {
    if (char.toLowerCase() === "x") {
      x++;
    }
    if (char.toLowerCase() === "o") {
      o++;
    }
  });

  if (!x && !o) {
    return true;
  }
  return x === o;
}

function xov2(str) {
  const xList = str.split("").filter((char) => char === "x");
  const oList = str.split("").filter((char) => char === "o");

  if (oList.length === 0 && xList.length === 0) {
    return true;
  }
  return oList.length === xList.length;
}

console.log(xo("xoXo"));
