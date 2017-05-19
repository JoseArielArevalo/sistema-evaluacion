/**
 * Comite.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  			nombre:{
  		type:'string',
  		required:true,
  		
  	},
  	apellido_paterno:{
  		type:'string',
  		required:true,
  		
  	},
  	apellido_materno:{
  		type:'string',
  		required:true,
  		
  	},
  	email:{
  		type:'email',
  		required:true,
  		
  	},
  	telefono:{
  		type:'int',
  		required:true,
  		
  	},
  		area:{
  		type:'string',
  		required:true,
  		
  	}

    //evaluaciones: {
    //  collection: 'evaluacion',
    //  via: 'owner'
    //}
  }
};

