//Livraria express para rotas
const express = require ('express');
 //Função que quando chamada cria um servidor , uma nova porta de entrada e retorno de respostas 
const server = express ();
//Endereço '/' e função 
server.get('/', (req, res) => {
    return res.send ('Hello World');}); //res.send resposta envia string 'Hello World'
//Porta que o servidor vai atender
server.listen (3333); 
