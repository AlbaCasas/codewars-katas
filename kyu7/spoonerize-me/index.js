function replaceFirstLetter(word, letter) {
  let charsList = word.split("");
  charsList[0] = letter;
  return charsList.join("");
}

function getFirstLetter(word) {
  return word.split("")[0];
}

function spoonerize(phrase) {
  const wordsList = phrase.split(" ");
  const firstWord = wordsList[0];
  const secondWord = wordsList[1];
  const newFirstWord = replaceFirstLetter(
    firstWord,
    getFirstLetter(secondWord)
  );
  const newSecondWord = replaceFirstLetter(
    secondWord,
    getFirstLetter(firstWord)
  );
  return [newFirstWord, newSecondWord].join(" ");
}

console.log(spoonerize("Hola mundo"));
