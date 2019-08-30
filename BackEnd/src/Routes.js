//Parte voltada apenas para tratação de rotas

const express = require('express'); //importando livaria express
const routes = express.Router(); //função que pertence ao 'Express" é uma função específica que cria objetos para rotas
const DevController = require('./controllers/DevController');

    routes.post('/devs' , DevController.store);
    module.exports = routes; //método do node para exportar alguma coisa precisamos utilizar routes no server.js