// Assignment code here

var chosenChars = [];

var userPassword = "";
// Lower Characters Array
const lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// Upper Characters Array
const upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
// Special characters Array
const special = ['!','@','#','$','%','^','&','*','(',')','*','+',',','-','.','/',';',':','<','=','>','?','[',']','_','`','{','}','|','`'];
// numbers array
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


function generatePassword() {
  var promptLength = parseInt(window.prompt('How many characters would you like your password to contain? Please choose between 8 - 128.'));

  var regEx = /^\d*$/;

  if (!regEx.test(promptLength)) {
    alert("this is not a number!")
    generatePassword();
  }

  if (promptLength < 8 || promptLength > 128 || promptLength === NaN) {
    window.alert("You did not enter a valid number, please try again.");
    generatePassword();
  };

  characterConfirm();

  for (var i = 0; i < promptLength; i++) {
    var randomCharacters = chosenChars[Math.floor(Math.random() * chosenChars.length)];
    userPassword += randomCharacters;
  }
  return userPassword;
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
    chosenChars = chosenChars.concat(lower);
  }
  if (lowercaseConfirm === true) {
    chosenChars = chosenChars.concat(upper);
  }
  if (numberConfirm === true) {
    chosenChars = chosenChars.concat(numbers);
  }
  if (symbolConfirm === true) {
    chosenChars = chosenChars.concat(special);
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
