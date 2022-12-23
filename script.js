// Assignment code here
var characters = {
  numeric: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
  uppercase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "V", "U", "W", "X", "Y", "Z"],
  lowercase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  special: ["!", "?", "@", "#", "$", "&", "*", "-", "=", "/", ",", "."]
}

function generatePassword() {
  beginGenerating();
};

var beginGenerating = function() {
  var userChoice = window.prompt("How many digits long do you want your password to be? (Enter a number 8-128)");
  var prompt1 = window.prompt("Do you want to include lowercase letters in your password? (Type Yes/No).");
  var prompt2 = window.prompt("Do you want to include uppercase letters in your password? (Type Yes/No).");
  var prompt3 = window.prompt("Do you want to include numbers in your password? (Type Yes/No).");
  var prompt4 = window.prompt("Do you want to include special characters in your password? (Type Yes/No).");

  var passwordInput = document.querySelector("#password");

  if (userChoice < 7 || passwordInput > 129) {
    window.alert("Enter a valid number 8-128!");
  } else {
    var userChoice = userChoice;
    window.alert("Okay! Your password will be " + userChoice + " digits long.");
    console.log(userChoice);

    lowercasePrompt();
  }

  function lowercasePrompt() {
    var prompt1 = window.prompt("Do you want to include lowercase letters in your password? (Type Yes/No).");
    if (prompt1 === "No" || "Yes") {
      window.alert("Oop! Your response must be a valid Yes or No answer");
    } else {
      var prompt1 = prompt1;
      console.log(prompt1);

      uppercasePrompt();
    };
  }

  function uppercasePrompt() {
    var prompt2 = window.prompt("Do you want to include uppercase letters in your password? (Type Yes/No).");
    if (prompt2 === "No" || "Yes") {
      window.alert("Oop! Your response must be a valid Yes or No answer");
    } else {
      var prompt2 = prompt2;
      console.log(prompt2);

      numericPrompt();
    };
  }

  function numericPrompt() {
    var prompt3 = window.prompt("Do you want to include numbers in your password? (Type Yes/No).");
    if (prompt3 === "No" || "Yes") {
      window.alert("Oop! Your response must be a valid Yes or No answer");
    } else {
      var prompt3 = prompt3;
      console.log(prompt3);

      specialPrompt();
    };
  }

  function specialPrompt() {
    var prompt4 = window.prompt("Do you want to include special characters in your password? (Type Yes/No).");
    if (prompt4 === "No" || "Yes") {
      window.alert("Oop! Your response must be a valid Yes or No answer");
    } else {
      var prompt4 = prompt4;
      console.log(prompt4);
    };

  function createNow(userChoice) {
      for (var i = 0; i < userChoice; i++) {
        (characters[Math.floor(Math.random() * characters.length)]);
      }
    };
    
  }
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
