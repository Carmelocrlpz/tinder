var express = require('express');
var router = express.Router();

//var Modelo = require("../models/modelo");

var Modelo = require("../models/modelo");


/* ******************* GET ************************* */

router.get('/', function(req,res,next){
	
Modelo.find({},function(err1,data){
		if (err1) 
		console.log(err1);
		res.json(data);
	});

});

router.get('/:id', function(req,res,next){
	var id = req.params.id;
	Modelo.findBY(id,function(err1,data){
		if (err1) 
		console.log(err1);
		res.json(data);
	});

});

/* ******************* POST ************************* */

router.post('/',function(req,res,next){
	
	Modelo.create(req.body, function(err1,data){
		if (err1) 
		console.log(err1);
		var objeto = req.body;
		objeto.username = String(req.body.username);
		res.json(data);

	});
});

/* ******************* PUT ************************* */

router.put('/:id', function(req,res,next){
	var id = req.params.id;
	Modelo.findById(id,function(err,data){
		if (err) {
			console.log(err);
		}
		data.fotos.usuario_id= req.body.fotos.usuario_id;
		data.fotos.foto= req.body.fotos.foto;
		//data.usuario.raza = req.body.raza;

		Modelo.update(id,data,function(err1,newdata){
			if (err1)
				console.log(err1);
			res.json(newdata);


		});
	});

});

/* ******************* DELETE ************************* */

router.delete('/:id', function(req,res,next){
	var id = req.params.id;
	Modelo.findByIdAndRemove(id,function(err,data){
		if (err) 
			console.log(err);
		
		
		res.json(data);
	});
});

module.exports = router;