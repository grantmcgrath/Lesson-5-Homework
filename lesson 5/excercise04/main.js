//Write a function called isVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, uppercase or lowercase. The function should return false if the character is not a vowel.

function isVowel(str) {
  var checkArray = ["a", "e", "i", "o", "u"];
  for(var indexChecker = 0; indexChecker < checkArray.length; indexChecker++){
    if (str === checkArray[indexChecker]) {
      return true;
    }
  }
  return false;
}

console.log(isVowel("e"));
console.log(isVowel("z"));
