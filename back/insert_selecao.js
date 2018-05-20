var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'trab'
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

var commands = ["INSERT INTO selecao (codigo_pais, nome_pais, descricao, grupo, entidade) VALUES ('RUS','Rússia','Seleção Russa: um grupo de jogadores que defende a bandeira Russa na Copa.',1,'CRF')",
"INSERT INTO selecao (codigo_pais, nome_pais, descricao, grupo, entidade) VALUES ('SAU','Arábia Saudita','Seleção da Arábia Saudita: um grupo de jogadores que defende a bandeira Saudita na Copa.',1,'CAF')",
"INSERT INTO selecao (codigo_pais, nome_pais, descricao, grupo, entidade) VALUES ('EGY','Egito','Seleção Egípcia: um grupo de jogadores que defende a bandeira Egípcia na Copa.',1,'CEF')",
"INSERT INTO selecao (codigo_pais, nome_pais, descricao, grupo, entidade) VALUES ('URY','Uruguai','Seleção Uruguaia: um grupo de jogadores que defende a bandeira Uruguaia na Copa.',1,'CUF')",
"INSERT INTO selecao (codigo_pais, nome_pais, descricao, grupo, entidade) VALUES ('POR','Portugal','Seleção Portuguesa: um grupo de jogadores que defende a bandeira Portuguesa na Copa.',2,'CPRF')",
"INSERT INTO selecao (codigo_pais, nome_pais, descricao, grupo, entidade) VALUES ('ESP','Espanha','Seleção Espanhola: um grupo de jogadores que defende a bandeira Espanhola na Copa.',2,'CESF')",
"INSERT INTO selecao (codigo_pais, nome_pais, descricao, grupo, entidade) VALUES ('MAR','Marrocos','Seleção Marroquina: um grupo de jogadores que defende a bandeira Marroquina na Copa.',2,'CMF')",
"INSERT INTO selecao (codigo_pais, nome_pais, descricao, grupo, entidade) VALUES ('IRN','Irã','Seleção Irãniana: um grupo de jogadores que defende a bandeira Irãniana na Copa.',2,'CIF')",
"INSERT INTO selecao (codigo_pais, nome_pais, descricao, grupo, entidade) VALUES ('FRA','França','Seleção Francesa: um grupo de jogadores que defende a bandeira Francesa na Copa.',3,'CFRF')",
"INSERT INTO selecao (codigo_pais, nome_pais, descricao, grupo, entidade) VALUES ('AUS','Austrália','Seleção Australiana: um grupo de jogadores que defende a bandeira Australiana na Copa.',3,'CAUF')",
"INSERT INTO selecao (codigo_pais, nome_pais, descricao, grupo, entidade) VALUES ('PER','Peru','Seleção Peruana: um grupo de jogadores que defende a bandeira Peruana na Copa.',3,'CPEF')",
"INSERT INTO selecao (codigo_pais, nome_pais, descricao, grupo, entidade) VALUES ('DEN','Dinamarca','Seleção Dinamarquesa: um grupo de jogadores que defende a bandeira Dinamarquesa na Copa.',3,'CDEF')",
"INSERT INTO selecao (codigo_pais, nome_pais, descricao, grupo, entidade) VALUES ('ARG','Argentina','Seleção Argentina: um grupo de jogadores que defende a bandeira Argentina na Copa.',4,'CARF')",
"INSERT INTO selecao (codigo_pais, nome_pais, descricao, grupo, entidade) VALUES ('ISL','Islândia','Seleção Islandesa: um grupo de jogadores que defende a bandeira Islandesa na Copa.',4,'CISF')",
"INSERT INTO selecao (codigo_pais, nome_pais, descricao, grupo, entidade) VALUES ('CRO','Croácia','Seleção Croata: um grupo de jogadores que defende a bandeira Croata na Copa.',4,'CCRF')",
"INSERT INTO selecao (codigo_pais, nome_pais, descricao, grupo, entidade) VALUES ('NIG','Nigéria','Seleção Nigeriana: um grupo de jogadores que defende a bandeira Nigeriana na Copa.',4,'CNIF')",
"INSERT INTO selecao (codigo_pais, nome_pais, descricao, grupo, entidade) VALUES ('BRA','Brasil','Seleção Brasileira: um grupo de jogadores que defende a bandeira Brasileira na Copa.',5,'CBF')",
"INSERT INTO selecao (codigo_pais, nome_pais, descricao, grupo, entidade) VALUES ('SWI','Suíça','Seleção Suíça: um grupo de jogadores que defende a bandeira Suíça na Copa.',5,'CSWF')",
"INSERT INTO selecao (codigo_pais, nome_pais, descricao, grupo, entidade) VALUES ('CRI','Costa Rica','Seleção Costa Riquenha: um grupo de jogadores que defende a bandeira Costa Riquenha na Copa.',5,'CCRIF')",
"INSERT INTO selecao (codigo_pais, nome_pais, descricao, grupo, entidade) VALUES ('SRB','Sérvia','Seleção Sérvia: um grupo de jogadores que defende a bandeira Sérvia na Copa.',5,'CSRB')",
"INSERT INTO selecao (codigo_pais, nome_pais, descricao, grupo, entidade) VALUES ('GER','Alemanha','Seleção Alemã: um grupo de jogadores que defende a bandeira Alemã na Copa.',6,'CGEF')",
"INSERT INTO selecao (codigo_pais, nome_pais, descricao, grupo, entidade) VALUES ('MEX','México','Seleção Mexicana: um grupo de jogadores que defende a bandeira Mexicana na Copa.',6,'CMEF')",
"INSERT INTO selecao (codigo_pais, nome_pais, descricao, grupo, entidade) VALUES ('SWE','Suécia','Seleção Sueca: um grupo de jogadores que defende a bandeira Sueca na Copa.',6,'CSEF')",
"INSERT INTO selecao (codigo_pais, nome_pais, descricao, grupo, entidade) VALUES ('KOR','Coréia do Sul','Seleção Sul Coreana: um grupo de jogadores que defende a bandeira Sul Coreana na Copa.',6,'CKOF')",
"INSERT INTO selecao (codigo_pais, nome_pais, descricao, grupo, entidade) VALUES ('BEL','Bélgica','Seleção Belga: um grupo de jogadores que defende a bandeira Belga na Copa.',7,'CBEF')",
"INSERT INTO selecao (codigo_pais, nome_pais, descricao, grupo, entidade) VALUES ('PAN','Panamá','Seleção Panamenha: um grupo de jogadores que defende a bandeira Panamenha na Copa.',7,'CPAF')",
"INSERT INTO selecao (codigo_pais, nome_pais, descricao, grupo, entidade) VALUES ('TUN','Tunísia','Seleção da Tunísia: um grupo de jogadores que defende a bandeira da Tunísia na Copa.',7,'CTUF')",
"INSERT INTO selecao (codigo_pais, nome_pais, descricao, grupo, entidade) VALUES ('ENG','Inglaterra','Seleção Inglesa: um grupo de jogadores que defende a bandeira Inglesa na Copa.','CENF')",
"INSERT INTO selecao (codigo_pais, nome_pais, descricao, grupo, entidade) VALUES ('POL','Polônia','Seleção Polonesa: um grupo de jogadores que defende a bandeira Polonesa na Copa.','8','CPOF')",
"INSERT INTO selecao (codigo_pais, nome_pais, descricao, grupo, entidade) VALUES ('SEN','Senegal','Seleção Senegalense: um grupo de jogadores que defende a bandeira Senegalense na Copa.','8','CSEF')",
"INSERT INTO selecao (codigo_pais, nome_pais, descricao, grupo, entidade) VALUES ('COL','Colômbia','Seleção Colombiana: um grupo de jogadores que defende a bandeira Colombiana na Copa.','8','CCOF')",
"INSERT INTO selecao (codigo_pais, nome_pais, descricao, grupo, entidade) VALUES ('JPN','Japão','Seleção Japonesa: um grupo de jogadores que defende a bandeira Japonesa na Copa.','8','CJPF')"]
for(var sql in commands){
	connection.query(sql, function (err, result) {
	if (err) throw err;
	console.log("1 record inserted");
	});
}


connection.end();