const express = require("express");
const router = express.Router();

const {
    obtenerLecturas,
    obtenerLecturaPorId,
    crearLectura
} = require("../controllers/lecturas.controller");

// GET /lecturas
router.get("/", obtenerLecturas);

// GET /lecturas/:id
router.get("/:id", obtenerLecturaPorId);

// POST /lecturas
router.post("/", crearLectura);

module.exports = router;