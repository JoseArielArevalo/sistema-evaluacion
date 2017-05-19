/**
 * ComiteController
 *
 * @description :: Server-side logic for managing comites
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	ingreso:function (req, res){

		console.log('entre al formulario de registro');
		res.view('comite/new');
	},

	create:function (req, res){

		var comiteObj={
			nombre: req.param('nombre'),
			apellido_paterno: req.param('apellido_paterno'),
			apellido_materno: req.param('apellido_materno'),
			email: req.param('email'),
			telefono: req.param('telefono'),
			area: req.param('area')
		}
		Comite.create(comiteObj, function(err,comite){
			if(err)
				return res.redirect('comite/ingreso');

			res.redirect('comite/index');
		})
	},
	show:function(req,res,next){
		Comite.findOne(req.param('id'), function comiteFounded(err,comite){
			if(err)
				return next(err);
			res.view({
				comite: comite
			});
		});
	},
	edit:function(req,res,next){
		Comite.findOne(req.param('id'), function comiteFounded(err,comite){
			if(err)
				return next(err);
			if(!comite)
				return next();
			res.view({
				comite: comite
			});
		});
	},
	update:function(req,res,next){
		var comiteObj={
			nombre: req.param('nombre'),
			apellido_paterno: req.param('apellido_paterno'),
			apellido_materno: req.param('apellido_materno'),
			email: req.param('email'),			
			area: req.param('area')
		}
		Comite.update(req.param('id'),comiteObj, function comiteUpdate(err,comite){
			if(err){
				req.session.flash = {
					err: err
				}
				return res.redirect('comite/edit/'+ req.param('id'));
			}

			res.redirect('/comite/show/'+ req.param('id'));
		});
	},

	index:function(req,res,next){
		Comite.find(function comiteFounded(err,comites){
			if(err){
				console.log(err);
				return next(err);
			}
			res.view({
				comites:comites
			});
		});
	},
	destroy:function(req, res, next) {
        Comite.destroy(req.param('id'), function comiteDestroyed (err) {
            if(err){
                console.log(err);
                return next(err);
            }
            res.redirect('/comite/index');
        });
    }

};

