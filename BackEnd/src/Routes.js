//Parte voltada apenas para tratação de rotas

const express = require('express'); //importando livaria express
const routes = express.Router(); //função que pertence ao 'Express" é uma função específica que cria objetos para rotas

//Endereço '/' e função 
routes.get('/', (req, res) => {
    return res.json({Message: `Hello ${req.query.name}` });}); /*res.send envia string 'Hello $querynaurl name=alguma coisa' , 
    .json(javascript object notation funciona igual objeto java sintaxe entre {})*/

    module.exports = routes; //método do node para exportar alguma coisa precisamos utilizar routes no server.js