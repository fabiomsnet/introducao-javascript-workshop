var s = "The winter is coming. It's really coming!";
var f = "Ned, Jon, Robb, Sansa, Bran, Arya, Rickon";

//Tamanho da String
console.log(s.length);

//Primeira ocorrência da palavra coming
console.log(s.indexOf("coming"));

//última ocorrência da palavra coming
console.log(s.lastIndexOf("coming"));

//Corta do índice 4 até o -8(Contado de trás para frente)
console.log(s.slice(4,-8));

//Extrai da string os valores do intervalo de indece especificado
console.log(s.substr(4,6));

//Substitui o valor especificado por outro
console.log(s.replace("winter", "summer"));

//Converte todas as letras da string para maiusculas
console.log(s.toUpperCase());

//Converte todas as letras da string para minusculas
console.log(s.toLowerCase());

//Concatena valores a string
console.log(s.concat("!", "!", "?@"));

//Divide a string baseado num separador especificado
console.log(f.split(", "));