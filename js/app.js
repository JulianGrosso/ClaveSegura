//--------------- Intro ---------------

const $btnContinuar = document.querySelector("#btnContinuar");
const $btnEmpezar = document.querySelector("#btnEmpezar");

const p01 = document.querySelector("#p01");
const p02 = document.querySelector("#p02");
const p03 = document.querySelector("#p03");

setTimeout(function () {
	p01.classList.add("avanzar");
}, 1000);

$btnContinuar.addEventListener("click", () => {
	p02.classList.add("avanzar");
});

$btnEmpezar.addEventListener("click", () => {
	p03.classList.add("avanzar");
});

//--------------------------------------
