const texto = `1,2,3,4,5,6,a.b c!d?e\r	-
f_g`;

console.log(texto.match(/\d/g)); //Números [0-9]
console.log(texto.match(/\D/g)); //Não números [^0-9]

console.log(texto.match(/\w/g)); //Caracteres [A-Za-z0-9_]
console.log(texto.match(/\W/g)); //Não caracteres [^A-Za-z0-9_]

console.log(texto.match(/\s/g)); //Espaço [\t\n\r\f]
console.log(texto.match(/\S/g)); //Não espaço [^\t\n\r\f]