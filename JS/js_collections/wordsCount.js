// BEGIN (write your solution here)
export default (words, stopWords) => {
  return words.map(word => word.toLowerCase())
  .filter(word => !stopWords.includes(word))
  .reduce((acc, word) => {
    return acc.has(word) ? acc.set(word, acc.get(word) + 1) : acc.set(word, 1);
  }, new Map());
}
// END
