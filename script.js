// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

var lowercaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var passwordLength = 8;
var testLetters = ["a","b","c","d","e"];

var randomPassword = "";

function generatePassword() {
  for (i=0;i<(passwordLength);i++) {
    //Generate random number from 0-25 corresponding to a letter.
    var randomLetter = Math.floor(Math.random() * (lowercaseLetters.length));
    //add random letter from array for each iteration of the loop
    randomPassword += lowercaseLetters[randomLetter];
  }

  return randomPassword;
};

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
