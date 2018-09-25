const http = require('http');

const server = http.createServer(function(req,res){
	global.req = req;
	global.res = res;
	
	if(req.url === "/"){
		var ctrl = require('./modules/pfcg/controller/UserController.class.js');
		ctrl.actionHome();
	}
	
	res.end();
});

server.listen(3000);
console.log("Node rodando na porta 3000");