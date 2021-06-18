//--------------- Intro ---------------

const $btnContinuar = document.querySelector("#btnContinuar");
const $btnEmpezar = document.querySelector("#btnEmpezar");

const body = document.querySelector("#body");
const p01 = document.querySelector("#p01");
const p02 = document.querySelector("#p02");
const p03 = document.querySelector("#p03");
const mainPage = document.querySelector("#mainPage");

setTimeout(function () {
	p01.classList.add("avanzar");
}, 1500);

$btnContinuar.addEventListener("click", () => {
	p02.classList.add("avanzar");
});

$btnEmpezar.addEventListener("click", () => {
	mainPage.classList.remove("display-none");
	p03.classList.add("avanzar");
	body.classList.remove("overflow-hidden");
});

//
//--------------- Generador de Password ---------------
//

const letrasMayMin = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
const letrasMayMinNum =
	"AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789012345678901234567890123456789";
const letrasMayMinSimb =
	"AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz¡!@#$%&/()=¿?+*[]{},.:;-_";
const letrasMayMinNumSimb =
	"AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz01234567890123456789¡!@#$%&/()=¿?+*[]{},.:;-_";

const genPass = (longitudPass, caracteres) => {
	let newPass = "";
	const caracteresLength = caracteres.length;

	for (let i = 0; i < longitudPass; i++) {
		newPass += caracteres.charAt(Math.floor(Math.random() * caracteresLength));
	}

	newPass = String(newPass);

	return newPass;
};

//
//--------------- Generador de Password según texto del usuario ---------------
//

const genPassUser = (textoUsuario, nivel) => {
	textoUsuario = textoUsuario.toLowerCase().replace(/ /g, "");
	nivel = "Alto";

	let newPass = "";
	let textoUsuarioLength = textoUsuario.length;

	for (let i = 0; i < textoUsuarioLength; i++) {
		let caracter = textoUsuario.charAt(i);

		caracter = caracter.replace(/[a-z]/, randomMayMin(caracter));
		caracter = caracter.replace(/a/i, caracterSeguroA());
		caracter = caracter.replace(/e/i, caracterSeguroE());
		caracter = caracter.replace(/i/i, caracterSeguroI());
		caracter = caracter.replace(/o/i, caracterSeguroO());
		caracter = caracter.replace(/s/i, caracterSeguroS());
		caracter = caracter.replace(/t/i, caracterSeguroT());
		caracter = caracter.replace(/y/i, caracterSeguroY());

		newPass += caracter;
	}

	return newPass;
};

//-------- Replacement functions by character --------

function caracterSeguroA() {
	let newCaracterSeguro = "";
	const caracteresSeguros = "Aa4@";

	newCaracterSeguro += caracteresSeguros.charAt(
		Math.floor(Math.random() * caracteresSeguros.length)
	);

	return newCaracterSeguro;
}

function caracterSeguroE() {
	let newCaracterSeguro = "";
	const caracteresSeguros = "Ee3";

	newCaracterSeguro += caracteresSeguros.charAt(
		Math.floor(Math.random() * caracteresSeguros.length)
	);

	return newCaracterSeguro;
}

function caracterSeguroI() {
	let newCaracterSeguro = "";
	const caracteresSeguros = "Ii!¡1";

	newCaracterSeguro += caracteresSeguros.charAt(
		Math.floor(Math.random() * caracteresSeguros.length)
	);

	return newCaracterSeguro;
}

function caracterSeguroO() {
	let newCaracterSeguro = "";
	const caracteresSeguros = "Oo0";

	newCaracterSeguro += caracteresSeguros.charAt(
		Math.floor(Math.random() * caracteresSeguros.length)
	);

	return newCaracterSeguro;
}

function caracterSeguroS() {
	let newCaracterSeguro = "";
	const caracteresSeguros = "Ss5$";

	newCaracterSeguro += caracteresSeguros.charAt(
		Math.floor(Math.random() * caracteresSeguros.length)
	);

	return newCaracterSeguro;
}

function caracterSeguroT() {
	let newCaracterSeguro = "";
	const caracteresSeguros = "Tt7";

	newCaracterSeguro += caracteresSeguros.charAt(
		Math.floor(Math.random() * caracteresSeguros.length)
	);

	return newCaracterSeguro;
}

function caracterSeguroY() {
	let newCaracterSeguro = "";
	const caracteresSeguros = "Yy&";

	newCaracterSeguro += caracteresSeguros.charAt(
		Math.floor(Math.random() * caracteresSeguros.length)
	);

	return newCaracterSeguro;
}

function randomMayMin(caracter) {
	let newCaracterSeguro = "";

	const controller = Math.floor(Math.random() * 100);

	if (controller % 2 === 1) {
		caracter = caracter.toUpperCase();
	}

	newCaracterSeguro += caracter;

	return newCaracterSeguro;
}

//
//
//--------------- Password Text Holder ---------------

const $passwordText = document.querySelector("#passwordText");

//--------------- User Text Holder ---------------

const $userText = document.getElementById("userText");

//--------------- System Default: 12 caracteres + MAY min Num ---------------

let passwordLenght = 12;
let passwordLevel = letrasMayMinNum;

let optionNum = true;
let optionSimb = false;
let optionTextUser = false;
let passwordFunction = genPass;

//--------------- Password Display in Text Holder ---------------

function passwordDisplay(passwordLenght, passwordLevel, passwordFunction) {
	$passwordText.innerHTML = passwordFunction(passwordLenght, passwordLevel);
}

//--------------- Password Refresh ---------------

function passwordRefresh() {
	passwordLevelSwitcher(optionNum, optionSimb, optionTextUser);
	passwordDisplay(passwordLenght, passwordLevel, passwordFunction);
}

passwordRefresh();

//--------------- Password Refresh Button ---------------

const $btnRefreshPass = document.querySelector("#btnRefreshPass");

$btnRefreshPass.addEventListener("click", () => {
	passwordRefresh();
});

//--------------- Personalization System ---------------

function passwordLevelSwitcher(optionNum, optionSimb, optionTextUser) {
	if (
		(optionNum === false) &
		(optionSimb === false) &
		(optionTextUser === false)
	) {
		passwordLevel = letrasMayMin;
		passwordFunction = genPass;
	}

	if (
		(optionNum === true) &
		(optionSimb === false) &
		(optionTextUser === false)
	) {
		passwordLevel = letrasMayMinNum;
		passwordFunction = genPass;
	}

	if (
		(optionNum === false) &
		(optionSimb === true) &
		(optionTextUser === false)
	) {
		passwordLevel = letrasMayMinSimb;
		passwordFunction = genPass;
	}

	if (
		(optionNum === true) &
		(optionSimb === true) &
		(optionTextUser === false)
	) {
		passwordLevel = letrasMayMinNumSimb;
		passwordFunction = genPass;
	}

	if (
		(optionNum === false) &
		(optionSimb === false) &
		(optionTextUser === true)
	) {
		passwordFunction = genPassUser;
		passwordLenght = $userText.value;
	}
}

//--------------- Password Copy Desktop ---------------

const $btnCopy = document.querySelector("#btnCopy");

function copiar() {
	const cb = navigator.clipboard;
	const text = $passwordText;
	cb.writeText(text.innerText).then(() => function () {});
}

$btnCopy.addEventListener("click", () => {
	copiar();
});

//
//
//--------------- Password Personalization Options ---------------
//
//

//--------------- Option Button: Números ---------------

const $btnOpNumeros = document.querySelector("#btnOpNumeros");

$btnOpNumeros.addEventListener("click", () => {
	let button = $btnOpNumeros.classList.value;

	if (button === "btn btn-numeros") {
		$btnOpNumeros.classList.add("btn-active");
		optionNum = true;
		passwordRefresh();
	} else if (button === "btn btn-numeros btn-active") {
		$btnOpNumeros.classList.remove("btn-active");
		optionNum = false;
		passwordRefresh();
	}
});

//--------------- Option Button: Símbolos ---------------

const $btnOpSimbolos = document.querySelector("#btnOpSimbolos");

$btnOpSimbolos.addEventListener("click", () => {
	let button = $btnOpSimbolos.classList.value;

	if (button === "btn btn-simbolos") {
		$btnOpSimbolos.classList.add("btn-active");
		optionSimb = true;
		passwordRefresh();
	} else if (button === "btn btn-simbolos btn-active") {
		$btnOpSimbolos.classList.remove("btn-active");
		optionSimb = false;
		passwordRefresh();
	}
});

//--------------- Option Range: Longitud de Caracteres ---------------

let $inputRange = document.querySelector("#longitud");
let $inputText = document.querySelector("#longitudValor");
let $rangeText = document.querySelector("#rengeText");

$inputText.innerHTML = $inputRange.value;

passwordLenght = $inputRange.value;

$inputRange.addEventListener(
	"input",
	function () {
		$inputText.innerHTML = $inputRange.value;
		passwordLenght = $inputRange.value;
		passwordRefresh();
	},
	false
);

//--------------- Option Button: Convertir Texto del Usuario ---------------

const $btnTextUser = document.querySelector("#btnTextUser");

$btnTextUser.addEventListener("click", () => {
	let button = $btnTextUser.classList.value;

	if (button === "btn btn-texto-usuario") {
		$btnTextUser.classList.add("btn-active");
		$btnTextUser.value = "Activado";
		optionTextUser = true;

		optionNum = false;
		$btnOpNumeros.classList.remove("btn-active");
		$btnOpNumeros.disabled = true;

		optionSimb = false;
		$btnOpSimbolos.classList.remove("btn-active");
		$btnOpSimbolos.disabled = true;

		$inputRange.disabled = true;
		$inputRange.classList.add("input-disabled");

		$inputText.classList.add("valor-disable");
		$rangeText.classList.add("valor-disable");

		passwordRefresh();
	} else if (button === "btn btn-texto-usuario btn-active") {
		$btnTextUser.classList.remove("btn-active");
		$btnTextUser.value = "Convertír";
		optionTextUser = false;

		optionNum = true;
		$btnOpNumeros.classList.add("btn-active");
		$btnOpNumeros.disabled = false;

		optionSimb = false;
		$btnOpSimbolos.classList.remove("btn-active");
		$btnOpSimbolos.disabled = false;

		$inputRange.disabled = false;
		$inputRange.classList.remove("input-disabled");

		$inputText.classList.remove("valor-disable");
		$rangeText.classList.remove("valor-disable");

		passwordLenght = $inputRange.value;

		passwordRefresh();
	}
});

//
//
//
//
//
//-----------------------------------------------------

// Test

// console.log(
// 	"Contraseña 12 caracteres nivel básico = MAY + min: " +
// 		genPass(12, letrasMayMin)
// );
// console.log(
// 	"Contraseña 12 caracteres nivel medio = MAY + min + NUM: " +
// 		genPass(12, letrasMayMinNum)
// );
// console.log(
// 	"Contraseña 12 caracteres nivel alto = MAY + min + NUM + SIMBOLOS: " +
// 		genPass(12, letrasMayMinNumSimb)
// );

// console.log(
// 	"Contraseña a partir del texto del usuario = MAY + min + NUM + SIMBOLOS: Ej. 'My App Its Alive!' = " +
// 		genPassUser("My App Its Alive!")
// );

//-----------------------------------------------------
