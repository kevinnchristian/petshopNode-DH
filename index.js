const http = require('http');
const url = require('url');
const petshop = require('./petshop');

http.createServer((req, res) => {

    let urlCompleta = url.parse(req.url, true);
    console.log(urlCompleta);

    if (urlCompleta.pathname == "/") {
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.write('Você está na página inicial!!!');
    };
    if (urlCompleta.pathname == "/home") {
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.write('Você está dentro do meu sistema petshop!!!');
    };
    if (urlCompleta.pathname == "/pet/adicionar") {
        if (petshop.adicionarPets(urlCompleta.query.nome)) {
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
            res.write('O pet foi cadastro com sucesso!!!');
        }else{
            res.write('Erro ao tentar cadastrar um pet!!!');
        }
    }

}).listen(3001, 'localhost');