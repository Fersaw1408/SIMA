const express = require("express");
const router = express.Router();

const {
    obtenerMedidores,
    obtenerMedidorPorId,
    crearMedidor
} = require("../controllers/medidores.controller");

// GET /medidores
router.get("/", obtenerMedidores);

// GET /medidores/:id
router.get("/:id", obtenerMedidorPorId);

// POST /medidores
router.post("/", crearMedidor);

module.exports = router;