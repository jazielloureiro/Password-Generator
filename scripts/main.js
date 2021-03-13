function copyToClipboard(){
	const minRange = 0, maxRange = 99999;
	let password = document.getElementById("password");

	password.select();
	password.setSelectionRange(minRange, maxRange);

	document.execCommand("copy");
}

function generatePassword(){
	const passwordLength = document.getElementById("slider").value;
	let characters = "", password = "";


	if(document.getElementById("lowercase").checked)
		characters = characters.concat("abcdefghijklmnopqrstuvwxyz");

	if(document.getElementById("uppercase").checked)
		characters = characters.concat("ABCDEFGHIJKLMNOPQRSTUVWXYZ");

	if(document.getElementById("numbers").checked)
		characters = characters.concat("0123456789");

	if(document.getElementById("symbols").checked)
		characters = characters.concat("!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~");

	if(characters !== ""){
		for(let i = 0; i < passwordLength; i++){
			let index = Math.floor(Math.random() * characters.length);

			password = password.concat(characters.charAt(index));
		}
	}

	document.getElementById("password").value = password;
}

function updateTextValue(value){
	document.getElementById("text-input").value = value;

	generatePassword();
}

function updateSliderValue(value){
	const minValue = 3, maxValue = 32;

	if(value < minValue)
		value = minValue;
	else if(value > maxValue)
		value = maxValue;

	document.getElementById("slider").value = value;

	updateTextValue(value);
}

generatePassword();
