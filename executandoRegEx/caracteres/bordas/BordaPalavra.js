const texto = "dia diatonico diafragma media wikipedia bom_dia melodia radial";

//console.log(texto.match(/\bdia/gi));
console.log(texto.match(/\bdia\w+/gi));
//console.log(texto.match(/\bdia\w*/gi));
console.log(texto.match(/\w+dia\b/gi));
console.log(texto.match(/\w+dia\w+/gi));
console.log(texto.match(/\bdia\b/gi));

//Borda é não \w. \b -> [^A-Za-z0-9], há problemas com acentos!

const texto1 = "dia diatônico diafragma, média wikipédia bom-dia melodia radial";
console.log(texto1.match(/\bdia\b/gi));
console.log(texto1.match(/(\S*)?dia(\S*)?/gi));
console.log(texto1.match(/([\wÀ-ú-]*)?dia([\wÀ-ú-]*)?/gi));
