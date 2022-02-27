function sortTheInnerContent(str) {
  const words = str.split(" ");
  const sortedWords = words.map((word) => {
    const firstChar = word[0];
    const lastChar = word[word.length - 1];
    if (word.length === 1) {
      return firstChar;
    }
    if (word.length === 2) {
      return firstChar + lastChar;
    }

    let innerContent = "";
    for (i = 1; i < word.length - 1; i++) {
      innerContent += word[i];
    }
    const sortedInnerContent = innerContent.split("").sort().reverse().join("");
    return firstChar + sortedInnerContent + lastChar;
  });
  return sortedWords.join(" ");
}
