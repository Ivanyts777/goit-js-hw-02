"use strict";

const findLongestWord = function (string) {
  const wordSplit = string.split(" ");
  let longestWord = wordSplit[0];
  // console.log(string);
  for (const word of wordSplit) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
};

/*
 * Виклич функції для перевірки працездатності твоєї реалізації.
 */
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
