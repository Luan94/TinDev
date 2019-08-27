/*abra a pasta do projeto antes de começar!!
/dê load no terminal integrado (ctrl + P toggle terminal).
 ̶s̶a̶l̶v̶e̶ ̶e̶ ̶c̶a̶r̶r̶e̶g̶u̶e̶ ̶n̶o̶d̶e̶ ̶s̶e̶r̶v̶e̶r̶.̶j̶s̶ ̶(̶n̶o̶m̶e̶ ̶d̶e̶s̶s̶e̶ ̶a̶r̶q̶u̶i̶v̶o̶)̶ ̶p̶a̶r̶a̶ ̶t̶o̶d̶a̶ ̶a̶l̶t̶e̶r̶a̶ç̶ã̶o̶ ̶f̶e̶i̶t̶a̶ ̶n̶o̶ ̶a̶r̶q̶u̶i̶v̶o̶*̶
 (NÃO PRECISA MAIS POR CAUSA DO SCRIPT DO NODEMON (outra dependência) o script
    está em package.json da pasta backend*/

//Livraria express para rotas
const express = require ('express');
 //Função que quando chamada cria um servidor , uma nova porta de entrada e retorno de respostas 
const server = express ();

//Importar 'Rotas' de Routes.js
const routes = require ('./Routes') 
/*a sintaxe para importar um arquivo que não é um módulo feito por terceiros
 é preciso indicar o caminho do arquivo nesse caso /. pois está na mesma pasta*/

 server.use(routes)//use geralmente é utilizado para configurações que está em outro arquivo funciona como se fosse add um plugin


    //Porta que o servidor vai atender
server.listen (3333); 
