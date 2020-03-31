const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const { errors } = require('celebrate');

const app = express();


app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());
/*
* Rota / Recursos
*/
/*
* Métodos HTTP:
*
*GET: Buscar/Listar uma informação no back-end
*POST: Criar uma informação no back-end
*PUT: Alterar uma informação no back-end
*DELETE: Deletar uma informação no back-end
*/

/*
* Tipos de paramentros
* 
* Query Params: Parametros nomeados enviados na rota após "?" (Filtros, paginação)
* Route Params: Parametros utilizados para identificar recursos
* Request Body: Corpo da requisição utilizado para criar ou alterar recursos
*/

/*
* SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
* NoSQL: MongoDB, CouchDB, etc
*/

/*
* Driver: SELECT * FROM users
* Query Builder: table('users').select
*/



module.exports = app;