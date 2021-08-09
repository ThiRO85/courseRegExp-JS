const texto = "1,2,3,4,5,6,a.b c!d?e[f";

//Para definir uma classe (ou conjunto) de caracteres usa-se []

const regexPares = /[02468]/g; //Dentro do conjunto equivale a 0 | 2 | 4...
console.log(texto.match(regexPares));

const texto1 = "João não vai passear na moto";
const regexComESemAcento = /n[aã]/g;
console.log(texto1.match(regexComESemAcento));