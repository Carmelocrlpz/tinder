var mongoose = require('mongoose');
var schema = mongoose.Schema;


var Modelo = new schema({

/************ Collection Usuario *******************/
usuario : {type: String, unique : true},
nombre : String,
edad : Number,
raza : String,
color : String,

/************ Collection Fotos *******************/
fotos : {
	usuario_id : {type: String, unique : true},
	foto : String

},


/*********** LOGIN ************/

login : {
	username: { type: String, required: true, index: { unique: true } },
    password: { type: String, required: true }
}


});


var tinder = mongoose.model('tinder', Modelo);

module.exports = tinder;