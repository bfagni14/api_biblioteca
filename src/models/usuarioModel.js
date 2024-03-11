const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_DB, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const UsuarioSchema = new mongoose.Schema({
  id: String,
  nombre: String
}, { collection: 'usuarios' });

const Usuario = mongoose.model('usuario', UsuarioSchema);

module.exports = Usuario;