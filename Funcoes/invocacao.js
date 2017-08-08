function dizeroi(nome) {
    console.log("Oi, " + nome);
}

dizeroi("Teste");

dizeroi.call({}, "Fabio");

dizeroi.apply({}, ["Teste1"]);