const http = require('http');
const url = require('url');
const petshop = require('./petshop');

let server = http.createServer((req, res) => {

    let urlCompleta = url.parse(req.url, true);
    //console.log(urlCompleta)

    if(urlCompleta.pathname == '/'){
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.write('Você está na página inicial');
        res.end();
    }

    if(urlCompleta.pathname == '/home'){
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.write('Você está dentro do sistema petshop');
        res.end();
    }

    if(urlCompleta.pathname == '/pet/adicionar'){
        if(petshop.adicionarPet(urlCompleta.query.nome)){
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
            res.end('O pet foi cadastrado com sucesso!');
        } else {
            res.writeHead(401, {'Content-Type': 'text/html; charset=utf-8'});
            res.end('Erro ao tentar cadastrar um pet');
        }
    }

    if(urlCompleta.pathname == '/pet/listar-pets'){
        if(petshop.listarPets()){
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
            res.end('OK!!!');
        } else {
            res.writeHead(401, {'Content-Type': 'text/html; charset=utf-8'});
            res.end('Não temos pets cadastrado no sistema');
        }
    }

    if(urlCompleta.pathname == '/pet/buscar-pets'){
        if(petshop.buscarPet()){
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
            res.end('OK!!!');
        } else {
            res.writeHead(401, {'Content-Type': 'text/html; charset=utf-8'});
            res.end('Pet não encontrado no sistema.');
        }
    }

}).listen(3000, 'localhost');