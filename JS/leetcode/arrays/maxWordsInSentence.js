/*
A sentence is a list of words that are separated by a single space with no leading or trailing spaces.

You are given an array of strings sentences, where each sentences[i] represents a single sentence.

Return the maximum number of words that appear in a single sentence.
*/

/**
 * @param {string[]} sentences
 * @return {number}
 */
 var mostWordsFound = function(sentences) {
  let max = 0;
  sentences.forEach((sentence) => {
      max = Math.max(sentence.split(" ").length, max);
  });
  return max;
};