function copy_to_clipboard(){
	let password = document.getElementById("password");
	const min_range = 0, max_range = 99999;

	password.select();
	password.setSelectionRange(min_range, max_range);

	document.execCommand("copy");
}

function generate_password(){
	let characters = "", password = "", password_length;

	password_length = document.getElementById("slider").value;

	if(document.getElementById("lowercase").checked)
		characters = characters.concat("abcdefghijklmnopqrstuvwxyz");

	if(document.getElementById("uppercase").checked)
		characters = characters.concat("ABCDEFGHIJKLMNOPQRSTUVWXYZ");

	if(document.getElementById("numbers").checked)
		characters = characters.concat("0123456789");

	if(document.getElementById("symbols").checked)
		characters = characters.concat("!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~");

	if(characters !== ""){
		for(let i = 0; i < password_length; i++){
			let index = Math.floor(Math.random() * characters.length);

			password = password.concat(characters.charAt(index));
		}
	}

	document.getElementById("password").value = password;
}

function update_text_value(value){
	document.getElementById("text-input").value = value;

	generate_password();
}

function update_slider_value(value){
	const min_value = 3, max_value = 32;

	if(value < min_value)
		value = min_value;
	else if(value > max_value)
		value = max_value;

	document.getElementById("slider").value = value;

	update_text_value(value);
}

generate_password();
