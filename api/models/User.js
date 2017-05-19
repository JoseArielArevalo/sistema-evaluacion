/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	nombre:{
  		type:'string',
  		required:true,
  		defaultsTo:'Carlos'
  	},
  	apellido_paterno:{
  		type:'string',
  		required:true,
  		defaultsTo:'loza'
  	},
  	apellido_materno:{
  		type:'string',
  		required:true,
  		defaultsTo:'vargas'
  	},
  	email:{
  		type:'string',
  		required:true,
  		defaultsTo:'carlos123@gmail.com'
  	},
  	telefono:{
  		type:'int',
  		required:true,
  		defaultsTo:'74837293'
  	}

  }
};

