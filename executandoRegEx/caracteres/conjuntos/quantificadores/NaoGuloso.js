const texto = "<div>Conteudo 01</div><div>Conteudo 02</div>";

//Quantificadores gulosos (greedy)

console.log(texto.match(/<div>.+<\/div>/g));
console.log(texto.match(/<div>.*<\/div>/g));
console.log(texto.match(/<div>.{0,100}<\/div>/g));

//Quantificadores NÃO gulosos (greedy)

console.log(texto.match(/<div>.+?<\/div>/g));
console.log(texto.match(/<div>.*?<\/div>/g));
console.log(texto.match(/<div>.{0,100}?<\/div>/g));