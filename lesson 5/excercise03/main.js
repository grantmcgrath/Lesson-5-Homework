//Write a function called longest that returns the longest of two input strings or arrays.

function longest(a, b) {
  if (a.length>b.length) {
    return a;
  }
  else {
    return b;
  }
}

var array1 = "bob, john, tod";
var array2 = "pizza, bacon, tacos";
var arrayLongest = longest(array1, array2);

console.log(arrayLongest);
