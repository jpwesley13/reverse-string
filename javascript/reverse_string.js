function reverseString(str) {
  // type your code here
  let rev = [];
  for(char of str) {
    rev.unshift(char)
  }
  return rev.join("")
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("Expecting: 'ahZ-yeS");
  console.log("=>", reverseString("Sey-Zha"));

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file

// Take in a String,

//for each character in the string, place it in a new string as the first character.

// return new string

// And a written explanation of your solution
