let listaDePets = [];

// função que adiciona o pet desejado no sistema.
function adicionarPets(nomePet) {
    listaDePets.push(` ${nomePet}`);
    console.log(listaDePets);

    // esse return true é para mostrar a variavel urlCompleta que está ok o valor, 
    // se retorna false a resposta sera o else apontando erro na página.
    return true;
};

// função que lista todos os pets cadastrados.
function listarPets() {
    for (let i = 0; i < listaDePets.length; i++) {
        listaDePets;
        console.log("Lista de pets cadastrados sendo exibida...");
        return true;
    };
};

// função que busca pets cadastrados.
function buscarPet(nomePet) {
    let indiceBusca = listaDePets.indexOf(nomePet);
    if (indiceBusca >= 0) {
        console.log(`O nome ${nomePet} encontrado em nosso sistema!!!`);
        return true;
    } else {
        console.log(`O nome ${nomePet} não consta no sistema.`);
    };
};

module.exports = { adicionarPets, buscarPet, listarPets, listaDePets };