// Assignment code here
var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "V", "U", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var special = ["!", "?", "@", "#", "$", "&", "*", "-", "=", "/", ",", "."];


function generatePassword() {
  beginGenerating();
  
};

var beginGenerating = function() {

  var userChoice = window.prompt("How many digits long do you want your password to be? (Enter a number 8-128)");
  var passwordInput = document.querySelector("#password");

  if (userChoice < 7 || passwordInput > 129) {
    window.alert("Enter a valid number 8-128!");
  } else {
    var userChoice = userChoice;
    window.alert("Nice! Your password will be " + userChoice + " digits long.");
  };

  var lowercasePrompt = window.confirm("Do you want lowercase letters?")
    if (lowercasePrompt) {
      window.alert("Ok no lowercase!")
    } else {
      window.alert("Noted!");
    };

};




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
