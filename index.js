const http = require('http');
const url = require('url');
const petshop = require('./petshop');

let server = http.createServer((req, res) => {

    // essa variavel recebe os valores da url, e o true é para função que return valor true. 
    let urlCompleta = url.parse(req.url, true);
    //console.log(urlCompleta)

    if(urlCompleta.pathname == '/'){
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.write('Você está na página inicial');
        res.end();
    };

    if(urlCompleta.pathname == '/home'){
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.write('Você está dentro do sistema petshop!!!');
        res.end();
    };

    if(urlCompleta.pathname == '/pet/adicionar'){
        // quando a função recebe (urlCompleta.query.nome) ao ser executada ela busca a query string passada na url,
        // /pet/adicionar?nome=tutu esse é exemplo de url com query string.
        if(petshop.adicionarPets(urlCompleta.query.nome)){
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
            res.end(`O pet ${urlCompleta.query.nome} foi cadastrado com sucesso!`);
        } else {
            res.writeHead(401, {'Content-Type': 'text/html; charset=utf-8'});
            res.end('Erro ao tentar cadastrar um pet');
        }
    };

    if(urlCompleta.pathname == '/pet/cadastros'){
        if(petshop.listarPets()){
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
            res.end(`Lista de pets cadastrado até o momento: ${petshop.listaDePets}`);
        } else {
            res.writeHead(401, {'Content-Type': 'text/html; charset=utf-8'});
            res.end('Não temos pets cadastrado no sistema');
        }
    };

    if(urlCompleta.pathname == '/pet/buscar-pet'){
        if(petshop.buscarPet(urlCompleta.query.nome)){
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
            res.end(`O pet ${urlCompleta.query.nome} foi encontrado no sistema!`);
        } else {
            res.writeHead(401, {'Content-Type': 'text/html; charset=utf-8'});
            res.end(`O pet ${urlCompleta.query.nome} não encontrado no sistema.`);
        }
    };

}).listen(3001, 'localhost');