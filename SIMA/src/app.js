const express = require("express");

const app = express();

const usuariosRoutes = require("./routes/usuarios.routes");
const medidoresRoutes = require("./routes/medidores.routes");
const lecturasRoutes = require("./routes/lecturas.routes");

app.use(express.json());

app.use("/usuarios", usuariosRoutes);
app.use("/medidores", medidoresRoutes);
app.use("/lecturas", lecturasRoutes);

app.get("/", (req, res) => {
    res.json({
        mensaje: "API SIMA funcionando"
    });
});

module.exports = app;