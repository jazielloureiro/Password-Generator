const password = document.getElementById('password');
const copyButton = document.getElementById('copy-button');
const generateButton = document.getElementById('generate-button');

const slider = document.getElementById('slider');
const textInput = document.getElementById('text-input');

const lowercaseCheckbox = document.getElementById('lowercase');
const uppercaseCheckbox = document.getElementById('uppercase');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');

function generatePassword() {
	let characters = '', newPassword = '';

	if(lowercaseCheckbox.checked)
		characters = characters.concat('abcdefghijklmnopqrstuvwxyz');

	if(uppercaseCheckbox.checked)
		characters = characters.concat('ABCDEFGHIJKLMNOPQRSTUVWXYZ');

	if(numbersCheckbox.checked)
		characters = characters.concat('0123456789');

	if(symbolsCheckbox.checked)
		characters = characters.concat('!\'#$%&"()*+,-./:;<=>?@[\\]^_`{|}~');

	if(characters !== '') {
		for(let i = 0; i < slider.value; i++) {
			let index = Math.floor(Math.random() * characters.length);

			newPassword = newPassword.concat(characters.charAt(index));
		}
	}

	password.value = newPassword;
}

generateButton.addEventListener('click', generatePassword);
lowercaseCheckbox.addEventListener('change', generatePassword);
uppercaseCheckbox.addEventListener('change', generatePassword);
numbersCheckbox.addEventListener('change', generatePassword);
symbolsCheckbox.addEventListener('change', generatePassword);

copyButton.addEventListener('click', () => {
	const minRange = 0, maxRange = 99999;

	password.select();
	password.setSelectionRange(minRange, maxRange);

	document.execCommand('copy');
});

slider.addEventListener('change', () => {
	textInput.value = slider.value;

	generatePassword();
});

textInput.addEventListener('change', () => {
	const minValue = 3, maxValue = 32;

	if(textInput.value < minValue)
		textInput.value = minValue;
	else if(textInput.value > maxValue)
		textInput.value = maxValue;

	slider.value = textInput.value;

	generatePassword();
});

generatePassword();
