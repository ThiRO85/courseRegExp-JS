const texto = "<b>Destaque</b><strong>Forte</strong><div>Conteudo</div>";
console.log(texto.match(/<(\w+)>.*<\/\1>/g));

const texto1 = "Lentamente é mente muito lenta";
console.log(texto1.match(/(lenta)(mente).*\2.*\1/gi));
console.log(texto1.match(/(?:lenta)(mente).*\1/gi)); //?: não armazena o valor

console.log(texto1.match(/(lenta)(mente)/gi));
console.log(texto1.match(/(lenta)(mente)?/gi));
console.log(texto1.replace(/(lenta)(mente)/gi, 'Se$2'));

const texto3 = "abcdefghijkll";
console.log(texto3.match(/\w+/g));
console.log(texto3.match(/(a)(b)(c)(d)(e)(f)(g)(h)(i)(j)(k)(l)\12/g));