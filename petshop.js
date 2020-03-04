let listaDePets = [];


function adicionarPets(nomePet) {
    listaDePets.push(nomePet);
    console.log(listaDePets);

    return true;
};

function listarPets() {
    for (let i = 0; i < listaDePets.length; i++) {
        listaDePets;
        console.log("Lista de pets cadastrados sendo exibida");
    };
    return true;
};


function buscarPet(nome) {
    let nomesDaLista = [];
    for (let nomes of listaDePets) {
        nomesDaLista.push(nomes.nome);
    };
    let indiceBusca = nomesDaLista.indexOf(nome);
    if (indiceBusca >= 0) {
        console.log(`O nome ${nome} encontrado em nosso sistema!!!`);
    } else {
        console.log(`O nome ${nome} não consta no sistema.`);
    };
    return true;
};

module.exports = { adicionarPets, listarPets, buscarPet };