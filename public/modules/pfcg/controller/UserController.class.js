var method = UserController.prototype;

function UserController(){
}

UserController.actionHome = function(){
	global.res.end("OK");
}

module.exports = UserController;