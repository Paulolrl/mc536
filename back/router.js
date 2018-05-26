var pessoa = require('./pessoa')
var lance = require('./lance')
var partida = require('./partida')
var grupos = require('./grupos')

// Define os endpoints, chamando as funções declaradas nos controllers
var defineRoutes = function (app) {
	app.get('/pessoa', pessoa.get);
	app.get('/lance', lance.get);
	app.get('/grupos', grupos.get);
	app.get('/partida/:idJogador/fezGol', partida.getPartidasQueFezGol);
}

module.exports = {
	defineRoutes: defineRoutes
}