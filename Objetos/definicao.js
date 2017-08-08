var obj = { 
    nome: "Fabio", 
    sobrenome: "Moreira", 
    idade: 16,
    apresentar: apresentar
};

function apresentar() {
    console.log("Olá, eu sou " + this.nome + ' ' + this.sobrenome + '.');
}

console.log(obj.nome);

obj.apresentar();