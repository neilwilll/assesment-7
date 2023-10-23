function hasPairWithSumToZero(nums) {
    // Create an object to store the numbers we have seen so far
    const seen = {};
  
    for (const num of nums) {
      // Check if the negative of the current number exists in the object
      if (seen[-num]) {
        return true;
      }
      // Add the current number to the object
      seen[num] = true;
    }
  
    // If we have iterated through the array without finding a pair, return false
    return false;
  }
  
  // Example usage:
  const numbers = [1, 2, -2, 4, -1];
  const result = hasPairWithSumToZero(numbers);
  console.log(result); // This will log true because 2 and -2 sum to 0.
  
  function hasUniqueCharacters(word) {
    // Create an object to store the characters we have seen so far
    const seen = {};
  
    for (const char of word) {
      // If the character is already in the object, it's a duplicate, so return false
      if (seen[char]) {
        return false;
      }
      // Add the character to the object
      seen[char] = true;
    }
  
    // If we have iterated through the entire word without finding duplicate characters, return true
    return true;
  }
  
  // Example usage:
  const word = "hello";
  const result = hasUniqueCharacters(word);
  console.log(result); // This will log false because 'l' is repeated.

  function isPangram(sentence) {
    // Create an object to store the unique letters in the sentence
    const letters = {};
  
    // Convert the sentence to lowercase to ensure case insensitivity
    sentence = sentence.toLowerCase();
  
    // Iterate through the characters in the sentence
    for (const char of sentence) {
      // Check if the character is an English alphabet letter
      if (char.match(/[a-z]/)) {
        letters[char] = true;
      }
    }
  
    // Check if the object of letters contains all 26 English alphabet letters
    return Object.keys(letters).length === 26;
  }
  
  // Example usage:
  const sentence = "The quick brown fox jumps over the lazy dog.";
  const result = isPangram(sentence);
  console.log(result); // This will log true because the sentence is a pangram.

  function findLongestWord(words) {
    if (words.length === 0) {
      return 0; // Return 0 if the input array is empty.
    }
  
    let longestLength = 0;
  
    for (const word of words) {
      if (word.length > longestLength) {
        longestLength = word.length;
      }
    }
  
    return longestLength;
  }
  
  // Example usage:
  const wordList = ["apple", "banana", "cherry", "date", "elderberry"];
  const longestWordLength = findLongestWord(wordList);
  console.log(longestWordLength); // This will log 11, which is the length of "elderberry".
  