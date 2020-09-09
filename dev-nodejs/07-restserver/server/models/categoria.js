const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let rolesValidos = {
  values: ['ADMIN_ROLE'],
  message: '{VALUE} no es un rol válido'
};

let Schema = mongoose.Schema;

let categoria = new Schema({

  descripcion: {
    type: String,
    required: [true,'La Descripción es obligatoria']
  },
  usuario: {
    type: String
    //,required: [true,'El Usuario es obligatorio']
  }

});


//categoria.plugin(uniqueValidator,{ message: '{PATH}  debe ser único' } );

module.exports = mongoose.model('Categoria',categoria);
