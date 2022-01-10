// Assignment code here

function generatePassword() {
  var promptLength = parseInt(window.prompt('How many characters would you like your password to contain? Please choose between 8 - 128.'));
  if (promptLength < 8 || promptLength > 128 || promptLength === NaN ) {
    window.alert("You did not enter a valid number, please try again.");
    generatePassword();
  };

  characterConfirm();

};

function characterConfirm() {
  var uppercaseConfirm = window.confirm('Would you like your password to contain uppercase letters? If yes click OK.');

    var lowercaseConfirm = window.confirm('Would you like your password to contain lowercase letters? If yes click OK.');

    var numberConfirm = window.confirm('Would you like your password to contain numbers? If yes click OK.');

    var symbolConfirm = window.confirm('Would you like your password to contain symbols? If yes click OK.');

  if (uppercaseConfirm === false && lowercaseConfirm === false && numberConfirm === false && symbolConfirm === false) {
    window.alert('You must choose a criteria!');
    generatePassword();
  }
  
  if (uppercaseConfirm === true) {
    getRandomUpper();
    console.log(getRandomUpper())
  }
  
  if (lowercaseConfirm === true) {
    getRandomLower();
    console.log(getRandomLower())
  }
  
  if (numberConfirm === true) {
    getRandomNumber();
    console.log(getRandomNumber())
  }
  
  if (symbolConfirm === true) {
    getRandomSymbol();
    console.log(getRandomSymbol())
  }
};



var getRandomLower = function() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

// generates random uppercase letter
var getRandomUpper = function() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

// generates random number 0 - 9
var getRandomNumber = function() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

// generates random symbol
var getRandomSymbol = function() {
  const symbols = '!@#$%^&*(){}[]=<>/,.'
  return symbols[Math.floor(Math.random() * symbols.length)];
}

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
