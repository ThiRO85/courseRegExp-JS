const texto = ".$+*?-";

console.log(texto.match(/[+.?*$]/g)); //Não precisa de escape (\) dentro do conjunto
console.log(texto.match(/[$-?]/g)); //Isso é um intervalo (range)
console.log(texto.match(/[$\-?]/g)); //Isso NÃO é um intervalo (range)
console.log(texto.match(/[-$?]/g)); //Isso NÃO é um intervalo (range)

//Podem precisar de escape dentro do conjunto: - [] ^