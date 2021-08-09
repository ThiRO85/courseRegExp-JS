const texto = `Os emails dos convidados são:
    - fulano@cod3r.com.br
    - xico@gmail.com
    - joao@empresa.info.br
    - maria_silva@registro.br
    - rafa.sampaio@yahoo.com`;

const regex = /[a-zA-Z0-9_]+@[a-zA-Z0-9_]+\.[a-zA-Z0-9_]{2,4}/g;
const regex1 = /\w+@\w+\.\w{2,4}/g;
const regex2 = /[\w.]+@\w+\.\w{2,4}/g;
const regex3 = /[\w.]+@\w+\.\w{2,4}\.?\w{0,2}/g;

console.log(texto.match(regex));
console.log(texto.match(regex1));
console.log(texto.match(regex2));
console.log(texto.match(regex3));

//No futuro:
console.log(texto.match(/[\w.]+@\w+\.\w{2,4}(\.\w{2})?/g));