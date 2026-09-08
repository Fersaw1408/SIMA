const usuarios = require("../models/usuario.model");
 
// GET /usuarios

const obtenerUsuarios = (req, res) => {

    res.json(usuarios);

};
 
 
// GET /usuarios/:id

const obtenerUsuarioPorId = (req, res) => {
 
    const id = Number(req.params.id);
 
    const usuario = usuarios.find(usuario => usuario.id === id);
 
    if (!usuario) {

        return res.status(404).json({

            mensaje: "Usuario no encontrado"

        });

    }
 
    res.json(usuario);

};
 
 
// POST /usuarios

const crearUsuario = (req, res) => {
 
    const { nombre, correo, telefono } = req.body;
 
    if (!nombre || !correo || !telefono) {

        return res.status(400).json({

            mensaje: "Todos los campos son obligatorios"

        });

    }
 
    const nuevoUsuario = {

        id: usuarios.length + 1,

        nombre,

        correo,

        telefono

    };
 
    usuarios.push(nuevoUsuario);
 
    res.status(201).json({

        mensaje: "Usuario creado correctamente",

        usuario: nuevoUsuario

    });

};
 
 
// PUT /usuarios/:id

const actualizarUsuario = (req, res) => {
 
    const id = Number(req.params.id);
 
    const usuario = usuarios.find(usuario => usuario.id === id);
 
    if (!usuario) {

        return res.status(404).json({

            mensaje: "Usuario no encontrado"

        });

    }
 
    const { nombre, correo, telefono } = req.body;
 
    usuario.nombre = nombre;

    usuario.correo = correo;

    usuario.telefono = telefono;
 
    res.json({

        mensaje: "Usuario actualizado correctamente",

        usuario

    });

};
 
 
// DELETE /usuarios/:id

const eliminarUsuario = (req, res) => {
 
    const id = Number(req.params.id);
 
    const indice = usuarios.findIndex(usuario => usuario.id === id);
 
    if (indice === -1) {

        return res.status(404).json({

            mensaje: "Usuario no encontrado"

        });

    }
 
    const usuarioEliminado = usuarios.splice(indice, 1);
 
    res.json({

        mensaje: "Usuario eliminado correctamente",

        usuario: usuarioEliminado[0]

    });

};
 
 
// GET /usuarios/:id/medidores

const obtenerMedidoresUsuario = (req, res) => {
 
    const id = Number(req.params.id);
 
    const usuario = usuarios.find(usuario => usuario.id === id);
 
    if (!usuario) {

        return res.status(404).json({

            mensaje: "Usuario no encontrado"

        });

    }
 
    res.json({

        id_usuario: id,

        medidores: []

    });

};
 
 
module.exports = {

    obtenerUsuarios,

    obtenerUsuarioPorId,

    crearUsuario,

    actualizarUsuario,

    eliminarUsuario,

    obtenerMedidoresUsuario

};
 