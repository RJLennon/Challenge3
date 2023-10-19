// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function generatePassword() {
  //Establish input variables to generate the password.
  var lowercaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var uppercaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var specialCharacters = ["!","@","#","$","%","^","&","*","(",")","~","`","-","_","+","=","{","[","}","]","|",":",";","<",",",">",".","?","/"];
  var numbers = ["0","1","2","3","4","5","6","7","8","9"]
  var randomPassword = "";

  //Input password length. Validate it is a number between 8 and 120.
  for (i=0;i<1;) {
    var passwordLength=prompt("Provide a password length:");
    if ((passwordLength>=8)&&(passwordLength<=120)) {
      i=1;
    } else if (passwordLength === null) {
      i=1;
    } else {
      alert("Invalid Response. Password length must be a number between 8 and 120.");
    };
  };

  //Input preferences. Validate & Confirm.
  for (i=0;i<1;) {
    if (passwordLength === null) {
      i=1;
    } else {
      var includeLowercase = confirm("Include lowercase letters in password?")
      var includeUppercase = confirm("Include uppercase letters in password?")
      var includeNumbers = confirm("Include numbers in password?")
      var includeSpecialChar = confirm("Include special characters in password?")
      i=1;
    }
  }


  //Generate password of inputted length
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