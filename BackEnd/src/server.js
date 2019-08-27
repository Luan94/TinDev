/*abra a pasta do projeto antes de começar!!
/dê load no terminal integrado (ctrl + P toggle terminal).
salve e carregue node server.js (nome desse arquivo) para toda alteração feita no arquivo*/

//Livraria express para rotas
const express = require ('express');
 //Função que quando chamada cria um servidor , uma nova porta de entrada e retorno de respostas 
const server = express ();
//Endereço '/' e função 
server.get('/', (req, res) => {
    return res.json({Message: `Hello ${req.query.name}` });}); /*res.send envia string 'Hello $querynaurl name=alguma coisa' , 
    .json(javascript object notation funciona igual objeto java sintaxe entre {})*/

    //Porta que o servidor vai atender
server.listen (3333); 
