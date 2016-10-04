
var mongoose = require('mongoose');
var schema = mongoose.Schema;

var Modelo2 = new schema({

/************ Collection Interacciones***********/
interacciones : String,
	user1_id : String,
	user2_id : String,

/************ Collection Mensajes ***********/
mensaj:{ 
	mensajes: String,
	usuario_uno : String,
	usuario_dos : String
},



/************ Collection Match************/
match : {
	user_uno : String,
	user_dos : String
}


 });


var tinder2 = mongoose.model('tinder', Modelo2);

module.exports = tinder2;