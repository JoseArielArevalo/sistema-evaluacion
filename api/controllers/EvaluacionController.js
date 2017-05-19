/**
 * EvaluacionController
 *
 * @description :: Server-side logic for managing evaluacions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    ingreso:function (req, res){

		console.log('entre al formulario de registro');
		res.view('evaluacion/evaluacionForm');
	},

	create:function (req, res) {

		var evaluacionObj={
			pregunta: req.param('pregunta'),
			area: req.param('area')
		}
		Evaluacion.create(evaluacionObj, function(err,evaluacion){
			if(err)
				return res.redirect('evaluacion/ingreso');

			res.redirect('evaluacion/index');
		})
	},

    index:function(req,res,next){
		Evaluacion.find(function evaluacionFounded(err,evaluaciones){
			if(err){
				console.log(err);
				return next(err);
			}
			res.view({
				evaluaciones:evaluaciones
			});
		});
	},

	destroy:function(req, res, next) {
        Evaluacion.destroy(req.param('id'), function evaluacionDestroyed (err) {
            if(err){
                console.log(err);
                return next(err);
            }
            res.redirect('/evaluacion/index');
        });
    },

    edit:function(req,res,next){
		Evaluacion.findOne(req.param('id'), function evaluacionFounded(err,evaluacion){
			if(err)
				return next(err);
			if(!evaluacion)
				return next();
			res.view({
				evaluacion: evaluacion
			});
		});
	},
	update:function(req,res,next){
		var comiteObj={
			pregunta: req.param('pregunta'),		
			area: req.param('area')
		}
		Evaluacion.update(req.param('id'),comiteObj, function evaluacionUpdate(err,evaluacion){
			if(err){
				req.session.flash = {
					err: err
				}
				return res.redirect('evaluacion/edit/'+ req.param('id'));
			}

			res.redirect('/evaluacion/index');
		});
	},


};

