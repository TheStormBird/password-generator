const numbers = [1,2,3,4,5,6,7,8,9,0];
const symbols = ["@","#","$","%","/",",",".","!","&","?"];
const characterCodes = Array.from(Array(26)).map((_, i) => i + 97);
const lowercaseLetters = characterCodes.map(code=> String.fromCharCode(code));
const uppercaseLetters = lowercaseLetters.map(letter=>letter.toUpperCase());

//Elements from the form
let lengthRange = document.getElementById("lengthRange");
let lengthNumber = document.getElementById("lengthNumber");
const form = document.getElementById("generatePassword");
const hasUpperCase = document.getElementById('hasUppercase');
const hasNumbers = document.getElementById('hasNumbers');
const hasSymbols = document.getElementById('hasSymbols');
const passwordDisplay = document.getElementById('passwordDisplay');
//Event Listeners
lengthNumber.addEventListener('input', syncLength);
lengthRange.addEventListener('input', syncLength);
form.addEventListener('submit', e => {
    e.preventDefault()
    const length = lengthNumber.value
    const includeUppercase = hasUpperCase.checked
    const includeNumbers = hasNumbers.checked
    const includeSymbols = hasSymbols.checked
    let password = generatePassword(length, includeNumbers, includeSymbols, includeUppercase)
    passwordDisplay.innerText = password
})
function syncLength(e) {
    const value = e.target.value;
    lengthRange.value = value;
    lengthNumber.value = value;
}

function generatePassword(length, hasNumbers, hasSymbols, hasUpperCase){
    let availableCharacters = [];
    availableCharacters = availableCharacters.concat(lowercaseLetters);
    if (hasNumbers == true) availableCharacters = availableCharacters.concat(numbers);
    if (hasSymbols == true) availableCharacters = availableCharacters.concat(symbols);
    if (hasUpperCase == true) availableCharacters = availableCharacters.concat(uppercaseLetters);

    let password = "";
    if (availableCharacters.length == 0) return "";

    for (let i = 0; i < length; i++)
    {
        const randIndex = Math.floor(Math.random() * availableCharacters.length);
        password += availableCharacters[randIndex];
    }
    return password
}