const texto = "Pedrinho (filho de Pedro Silva) é doutor do ABC";

console.log(texto.match(/[(abc)]/gi)); //Dentro de conjunto não é grupo
console.log(texto.match(/([abc])/gi));
console.log(texto.match(/[abc]/gi));
console.log(texto.match(/(abc)/gi));