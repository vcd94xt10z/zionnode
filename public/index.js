/**
 * Autor Vinicius <dias.viniciuscesar@gmail.com>
 * Desde 13/12/2018 v0.1
 * npm install express fs
 */
const express = require('express');
const fs = require('fs');

const app = express();

app.get('/', function(req, res){
	res.redirect(301, '/modules/pfcg/User/home');
});

app.get('/modules/*', function(req, res){
	var uri = req.url.split('/');
	
	let payload      = {};
	payload.req      = req;
	payload.res      = res;
	payload.moduleid = uri[2];
	payload.entityid = uri[3];
	payload.action   = uri[4];
	
	var file = './modules/'+payload.moduleid+'/controller/'+payload.entityid+'Controller.class.js';
	fs.exists(file,function(exists){
		if(!exists){
			res.status(404).send("A página atual não existe");
			return;
		}
		
		var ctrl   = require(file);
		var method = 'action'+payload.action[0].toUpperCase() + payload.action.slice(1);
		try {
			var type = '';
			eval('type = (typeof ctrl.'+method+');');
			if(type !== 'function'){
				res.status(404).send("Ação "+payload.action+" não encontrada");
				return;
			}
			
			eval('ctrl.'+method+'(payload);');
		}catch(e){
			res.status(500).send('('+method+') Erro interno');
		}
	});
});

// manipulador de erros
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Serviço indisponível');
});

// escutando porta
app.listen(80, function (){
  console.log('NodeJS rodando na porta 80');
});