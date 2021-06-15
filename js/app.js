const $btnAtras = document.querySelector(".btn-atras");
const $btnSiguiente = document.querySelector(".btn-siguiente");

const p01 = document.querySelector("#p01");
const p02 = document.querySelector("#p02");
const p03 = document.querySelector("#p03");

//-----------------------------------------------

function sigiente(pagina) {
	pagina.classList.remove("atras");
	pagina.classList.add("avanzar");
	i++;
}

function atras(pagina) {
	pagina.classList.remove("avanzar");
	pagina.classList.add("atras");
	i--;
}

function mostrarBtnAtras() {
	$btnAtras.classList.remove("desactivado");
}

function ocultarBtnAtras() {
	$btnAtras.classList.add("desactivado");
}

function mostrarBtnSiguiente() {
	$btnSiguiente.classList.remove("desactivado");
}

function ocultarBtnSiguiente() {
	$btnSiguiente.classList.add("desactivado");
}

//-----------------------------------------------

//-----------------------------------------------

paginas = [1, 2, 3];
let i = 0;

$btnSiguiente.addEventListener("click", () => {
	let pagina = "p0" + paginas[i];

	if (eval(pagina) === p03) {
	} else if (eval(pagina) === p02) {
		sigiente(eval(pagina));
		ocultarBtnSiguiente();
	} else {
		sigiente(eval(pagina));
		mostrarBtnAtras();
	}
});

$btnAtras.addEventListener("click", () => {
	let pagina = "p0" + paginas[i - 1];

	if (pagina === "p0undefined") {
	} else if (pagina === "p01") {
		atras(eval(pagina));
		ocultarBtnAtras();
	} else {
		atras(eval(pagina));
		mostrarBtnSiguiente();
	}
});

//-----------------------------------------------

// $btnAtras.addEventListener("click", () => {
// 	console.log("Atras");
// });

// $btnSiguiente.addEventListener("click", () => {
// 	console.log("Siguente");
// });

// btnSiguienteP01.addEventListener("click", () => {
// 	pagina01.classList.remove("avanzar");
// 	pagina01.classList.add("avanzar");
// });

// btnSiguienteP02.addEventListener("click", () => {
// 	pagina02.classList.remove("atras");
// 	pagina02.classList.add("avanzar");
// });

// btnAtrasP03.addEventListener("click", () => {
// 	pagina02.classList.remove("avanzar");
// 	pagina02.classList.add("atras");
// });
