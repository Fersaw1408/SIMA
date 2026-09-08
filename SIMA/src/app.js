const express = require("express");
 
const app = express();
 
const usuariosRoutes = require("./routes/usuarios.routes");
 
 
// Permite recibir datos JSON
app.use(express.json());
 
 
// Ruta principal de usuarios
app.use("/usuarios", usuariosRoutes);
 
 
// Ruta de prueba
app.get("/", (req, res) => {
    res.json({
        mensaje: "API SIMA funcionando"
    });
});
 
 
module.exports = app;