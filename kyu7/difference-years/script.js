function getYears(date1, date2) {
  return Math.abs(date1.split("/")[0] - date2.split("/")[0]);
}

console.log(getYears("2015/10/10", "1990/10/10"));
