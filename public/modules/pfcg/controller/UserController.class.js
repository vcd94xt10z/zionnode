var ejs = require('ejs');

var method = UserController.prototype;

function UserController(){
}

UserController.actionHome = function(){
	/*
	var html = ejs.render("<%= user.name %>", {
	    user: { name: 'Vinicius' }
	});
	*/
	
	data = "";
	options = {user: { name: 'Vinicius' }};
	ejs.renderFile("./modules/pfcg/view/user-requestLogin.ejs", options, function(err, str){
		global.res.end(str);
	});
}

module.exports = UserController;