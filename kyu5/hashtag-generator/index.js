function capitalizeTheFirstLetter(words) {
  const separateWord = words.toLowerCase().split(" ");
  for (let i = 0; i < separateWord.length; i++) {
    separateWord[i] =
      separateWord[i].charAt(0).toUpperCase() + separateWord[i].substring(1);
  }
  const totalWords = separateWord.join("");
  if (totalWords.length === 0 || totalWords.length >= 140) {
    return false;
  }
  return `#${totalWords}`;
}
console.log(capitalizeTheFirstLetter("Hello there thanks for trying my Kata"));
