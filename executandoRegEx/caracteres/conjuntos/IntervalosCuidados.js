const texto = "ABC [abc] a-c 1234";

console.log(texto.match(/[a-c]/g));
console.log(texto.match(/a-c/g)); //Não define um range
console.log(texto.match(/[A-z]/g)); //Intervalos usam a ordem da tabela UNICODE

//console.log(texto.match(/[z-A]/g)); A ordem da tabela UNICODE deve ser respeitada