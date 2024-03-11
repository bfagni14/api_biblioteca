const express = require("express");

const { auth } = require("express-oauth2-jwt-bearer");
//const errorHandler = require("./middlewares/errorHandler");


require('dotenv').config();

// Configuracion Middleware con el Servidor de Autorización 
const autenticacion = auth({
  audience: "http://localhost:3000/libros",
  issuerBaseURL: "https://dev-glxmoxc4xz2vvyl4.us.auth0.com/",
  tokenSigningAlg: "RS256",
  });


const app = express();
app.use(express.json());

// Importamos el Router de Libros
const librosRouter = require('./routes/libros');
// Importamos el Router de Libros
const usuariosRouter = require('./routes/usuarios');
// Importamos el Middleware Error Handler
const errorHandler = require('./middlewares/errorHandler');
app.use('/libros', autenticacion, librosRouter);
app.use('/usuarios',autenticacion, usuariosRouter)
app.use(errorHandler);

app.listen(3000, () => {
  console.log("Servidor iniciado en el puerto 3000");
});

module.exports = app;