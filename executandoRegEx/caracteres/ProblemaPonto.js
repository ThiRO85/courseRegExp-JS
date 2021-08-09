const texto1 = "Bom\ndia";
console.log(texto1);

const texto2 = "Bom\tdia";
console.log(texto2);
console.log();

console.log(texto1.match(/.../gi));
console.log(texto1.match(/..../gi)); //O ponto não engloba o \n
console.log();

console.log(texto2.match(/.../gi));
console.log(texto2.match(/..../gi)); //O ponto engloba o \t

//dotall - algumas linguagens têm uma flag /exp/s, mas JS não!