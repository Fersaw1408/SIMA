const express = require("express");
 
const router = express.Router();
 
const {
    obtenerUsuarios,
    obtenerUsuarioPorId,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario,
    obtenerMedidoresUsuario
} = require("../controllers/usuarios.controller");
 
 
// GET /usuarios
router.get("/", obtenerUsuarios);
 
 
// GET /usuarios/:id
router.get("/:id", obtenerUsuarioPorId);
 
 
// POST /usuarios
router.post("/", crearUsuario);
 
 
// PUT /usuarios/:id
router.put("/:id", actualizarUsuario);
 
 
// DELETE /usuarios/:id
router.delete("/:id", eliminarUsuario);
 
 
// GET /usuarios/:id/medidores
router.get("/:id/medidores", obtenerMedidoresUsuario);
 
 
module.exports = router;