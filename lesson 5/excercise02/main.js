//Write a function called yell that logs out an uppercase version of a string.
//Write a function called yell10 that uses your yell function to log out an uppercase version of a string 10 times.

function yell(sentence) {
  var sentence = "I am tired and would like to take a nap.";
  var res = sentence.toUpperCase();
}



console.log(yell);


function yell10(yell){
  return yell * 10;
}



console.log(yell10);
