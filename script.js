// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function generatePassword() {

  //Input password length. Validate it is a number between 8 and 120.
  for (i=0;i<1;) {
    var passwordLength=prompt("Provide a password length:");
    if ((passwordLength>=8)&&(passwordLength<=120)) {
      i=1;
    } else if (passwordLength === null) {
      i=1;
    } else {
      alert("Error: Password length must be a number between 8 and 120.");
    };
  };

  //Input character preferences. Validate & Confirm.
  for (i=0;i<1;) {
    if (passwordLength === null) {
      //Do not display prompts if user has previously cancelled.
      i=1;
    } else {
      //Provide password criteria prompts.
      var includeLowercase = confirm("Include lowercase letters in password?");
      var includeUppercase = confirm("Include uppercase letters in password?");
      var includeNumbers = confirm("Include numbers in password?");
      var includeSpecialChar = confirm("Include special characters in password?");
      
      //Confirm at least one of the criteria is true.
      if (includeLowercase||includeUppercase||includeNumbers||includeSpecialChar) {
        var validateLowercase = "";
        var validateUppercase = "";
        var validateNumbers = "";
        var validateSpecialChar = "";

        //Setup confirmation message.
        if (includeLowercase) {
          validateLowercase = "\nLowercase Letters"
        };
        if (includeUppercase) {
          validateUppercase = "\nUppercase Letters"
        };
        if (includeNumbers) {
          validateNumbers = "\nNumbers"
        };
        if (includeSpecialChar) {
          validateSpecialChar = "\nSpecial Characters"
        };
        var validatePreferences = confirm("A password will be generated with "+passwordLength+" random characters that will include at least one of the following:\n"+validateLowercase+validateUppercase+validateNumbers+validateSpecialChar+"\n\nCONFIRM?");
        
        //Continue if confirmed. End if cancelled.
        if (validatePreferences) {
          i=1;
        } else {
          passwordLength = null;
          i=1;
        }
      } else {
        alert ("Error: Must confirm at least one of the provided criteria.");
      };
      
    };
  }

  //Establish input variables to generate the password.
  var lowercaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var uppercaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var specialCharacters = ["!","@","#","$","%","^","&","*","(",")","~","`","-","_","+","=","{","[","}","]","|",":",";","<",",",">",".","?","/"];
  var numbers = ["0","1","2","3","4","5","6","7","8","9"];
  var combinedArray = [];
  var baselinePassword = "";
  var randomPassword = "";

  //Provide 1 of each of the selected criteria characters & create combined array of selected criteria.
  if (includeLowercase) {
    var randomLowercase = Math.floor(Math.random() * (lowercaseLetters.length));
    baselinePassword += lowercaseLetters[randomLowercase];
    combinedArray = combinedArray.concat(lowercaseLetters);
  };
  if (includeUppercase) {
    var randomUppercase = Math.floor(Math.random() * (uppercaseLetters.length));
    baselinePassword += uppercaseLetters[randomUppercase];
    combinedArray = combinedArray.concat(uppercaseLetters);
  };
  if (includeNumbers) {
    var randomNumber = Math.floor(Math.random() * (numbers.length));
    baselinePassword += numbers[randomNumber];
    combinedArray = combinedArray.concat(numbers);
  };
  if (includeSpecialChar) {
    var randomSpecialChar = Math.floor(Math.random() * (specialCharacters.length));
    baselinePassword += specialCharacters[randomSpecialChar];
    combinedArray = combinedArray.concat(specialCharacters);
  };
  if (passwordLength===null) {
    baselinePassword=null;
  };

  //Test combine array in console log.
  console.log(lowercaseLetters.length);
  console.log(uppercaseLetters.length);
  console.log(numbers.length);
  console.log(specialCharacters.length);
  console.log(combinedArray.length);
  console.log(combinedArray[0]);
  console.log(combinedArray[(combinedArray.length-1)]);
  console.log(baselinePassword.length);

  //Generate remaining characters of password using combined array.
  for (i=0;i<(passwordLength-baselinePassword.length);i++) {
    var randomCombined = Math.floor(Math.random() * (combinedArray.length));
    randomPassword += combinedArray[randomCombined];
  };

  //Combine baseline and random password.
  var combinedPassword = baselinePassword+randomPassword;

  //Last step is to shuffle characters of the combined password.

  return combinedPassword;
};

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);