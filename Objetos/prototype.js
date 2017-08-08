function Stark(nome, idade, corDoCabelo) {
    this.nome = nome;
    this.idade = idade;
    this.corDoCabelo = corDoCabelo;

    this.sobrenome = "Stark";
    this.apresentar = function() {
        console.log("Olá, eu sou " + this.nome + ' ' + this.sobrenome + '.');
    }
}

Stark.prototype.darTchau = function() { console.log("Tchau"); };

var fabio = new Stark("Fabio", 40, "Preto");
fabio.apresentar();

var sansa = new Stark("Sansa", 13, "Cobre");
sansa.darTchau();
sansa.apresentar();

String.prototype.apagar = function() {
    return "";
}

console.log("oi".apagar());