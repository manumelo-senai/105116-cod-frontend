let nome = "Manu Melo";
console.log("Olá, "+ nome +"! Seja bem-vindo ao curso Front-End!");

let anoAtual = 2026;
let anoNascimento = 2005;
let idade = anoAtual - anoNascimento;

console.log("Você tem "+ idade +"anos.");

let matematica = 8;
let portugues = 10;
let ciencias = 9;
let mediaFinal = (matematica + portugues + ciencias) / 3;

console.log("Nota de Matemática: " + matematica);
console.log("Nota de Português: " + portugues);
console.log("Nota de Ciências: " + ciencias);
console.log("Média final: " + mediaFinal.toFixed(2));

if (mediaFinal >= 7) {
    console.log("Parabéns! Você foi aprovado.");
} else {
    console.log("Você precisa melhorar suas notas.");
}