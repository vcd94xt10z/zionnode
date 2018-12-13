var ejs = require('ejs');

var method = UserController.prototype;

function UserController(){
}

UserController.actionHome = function(payload){
	/*
	var html = ejs.render("<%= user.name %>", {
	    user: { name: 'Vinicius' }
	});
	*/
	
	data = "";
	options = {user: { name: 'Vinicius' }};
	ejs.renderFile("./modules/pfcg/view/user-requestLogin.ejs", options, function(err, str){
		payload.res.end(str);
	});
}

UserController.actionList = function(payload){
	payload.res.send("Estou na listagem");
}

UserController.actionEdit = function(payload){
	payload.res.send("Estou na edição");
}

module.exports = UserController;