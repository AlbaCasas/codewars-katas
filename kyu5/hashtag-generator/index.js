function capitalizeTheFirstLetter(string) {
  let words = string.toLowerCase().split(" ");
  words = words.map((word) => word.charAt(0).toUpperCase() + word.substring(1));
  const result = words.join("");
  if (result.length === 0 || result.length >= 140) {
    return false;
  }
  return `#${result}`;
}
console.log(capitalizeTheFirstLetter("Hello there thanks for trying my Kata"));
