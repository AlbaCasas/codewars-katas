function i(word) {
  let countV = 0;
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  word.split("").forEach((char) => {
    if (vowels.includes(char)) {
      countV++;
    }
  });
  const countC = word.length - countV;

  if (
    !word ||
    word[0].toLowerCase() === "i" ||
    countV >= countC ||
    word[0] === word[0].toLowerCase()
  ) {
    return "Invalid word";
  }
  return "i" + word;
}

console.log(i("East"));
