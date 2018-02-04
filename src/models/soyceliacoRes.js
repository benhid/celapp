import mongoose from 'mongoose';

var soyceliacoResSchema = mongoose.Schema({
    respuestas: [
      {
        pregunta: String,
        respuesta: String
      }
    ],
}, { collection: 'soyceliacoRes' });

module.exports = mongoose.model('soyceliacoRes', soyceliacoResSchema);
