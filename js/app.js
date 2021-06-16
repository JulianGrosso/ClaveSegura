//--------------- Intro ---------------

const $btnContinuar = document.querySelector("#btnContinuar");
const $btnEmpezar = document.querySelector("#btnEmpezar");

const body = document.querySelector("#body");
const p01 = document.querySelector("#p01");
const p02 = document.querySelector("#p02");
const p03 = document.querySelector("#p03");

setTimeout(function () {
	p01.classList.add("avanzar");
}, 2000);

$btnContinuar.addEventListener("click", () => {
	p02.classList.add("avanzar");
});

$btnEmpezar.addEventListener("click", () => {
	p03.classList.add("avanzar");
	body.classList.remove("overflow-hidden");
});

//
//--------------- Generador de Password ---------------
//

const letrasMayMin = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
const letrasMayMinNum =
	"AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789012345678901234567890123456789";
const letrasMayMinNumSimb =
	"AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz01234567890123456789¡!@#$%&/()=¿?^+*[]{},;.:-_<>";

const genPass = (longitudPass, caracteres) => {
	let newPass = "";
	const caracteresLength = caracteres.length;
	for (let i = 0; i < longitudPass; i++) {
		newPass += caracteres.charAt(Math.floor(Math.random() * caracteresLength));
	}

	return newPass;
};

//
//--------------- Generador de Password según texto del usuario ---------------
//

const genPassUser = (textoUsuario) => {
	textoUsuario = textoUsuario.toLowerCase().replace(/ /g, "");

	let newPass = "";
	let textoUsuarioLength = textoUsuario.length;

	for (let i = 0; i < textoUsuarioLength; i++) {
		let caracter = textoUsuario.charAt(i);

		caracter = caracter.replace(/a/g, caracterSeguroA(caracter));
		caracter = caracter.replace(/e/g, caracterSeguroE(caracter));
		caracter = caracter.replace(/i/g, caracterSeguroI(caracter));
		caracter = caracter.replace(/o/g, caracterSeguroO(caracter));
		caracter = caracter.replace(/s/g, caracterSeguroS(caracter));
		caracter = caracter.replace(/t/g, caracterSeguroT(caracter));
		caracter = caracter.replace(/y/g, caracterSeguroY(caracter));

		newPass += caracter;
	}

	return newPass;
};

//-------- Funciones de remplazo según caracter --------

function caracterSeguroA(caracter) {
	let newCaracterSeguro = "";
	const caracteresSeguros = "Aa4@";

	newCaracterSeguro += caracteresSeguros.charAt(
		Math.floor(Math.random() * caracteresSeguros.length)
	);

	return newCaracterSeguro;
}

function caracterSeguroE(caracter) {
	let newCaracterSeguro = "";
	const caracteresSeguros = "Ee3";

	newCaracterSeguro += caracteresSeguros.charAt(
		Math.floor(Math.random() * caracteresSeguros.length)
	);

	return newCaracterSeguro;
}

function caracterSeguroI(caracter) {
	let newCaracterSeguro = "";
	const caracteresSeguros = "Ii!¡1";

	newCaracterSeguro += caracteresSeguros.charAt(
		Math.floor(Math.random() * caracteresSeguros.length)
	);

	return newCaracterSeguro;
}

function caracterSeguroO(caracter) {
	let newCaracterSeguro = "";
	const caracteresSeguros = "Oo0";

	newCaracterSeguro += caracteresSeguros.charAt(
		Math.floor(Math.random() * caracteresSeguros.length)
	);

	return newCaracterSeguro;
}

function caracterSeguroS(caracter) {
	let newCaracterSeguro = "";
	const caracteresSeguros = "Ss5$";

	newCaracterSeguro += caracteresSeguros.charAt(
		Math.floor(Math.random() * caracteresSeguros.length)
	);

	return newCaracterSeguro;
}

function caracterSeguroT(caracter) {
	let newCaracterSeguro = "";
	const caracteresSeguros = "Tt7";

	newCaracterSeguro += caracteresSeguros.charAt(
		Math.floor(Math.random() * caracteresSeguros.length)
	);

	return newCaracterSeguro;
}

function caracterSeguroY(caracter) {
	let newCaracterSeguro = "";
	const caracteresSeguros = "Yy&";

	newCaracterSeguro += caracteresSeguros.charAt(
		Math.floor(Math.random() * caracteresSeguros.length)
	);

	return newCaracterSeguro;
}

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
