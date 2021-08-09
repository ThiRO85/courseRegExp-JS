const texto = "1,2,3,a.b c!d?e[f";

console.log(texto.match(/\D/g));
console.log(texto.match(/[^0-9]/g));
console.log(texto.match(/[^\d!\?\[\s,\.]/g));

const texto1 = "1: !'#$%&\()*+,-./ 2: :;<=>?@";

console.log(texto1.match(/[^!-/:-@\s]/g));