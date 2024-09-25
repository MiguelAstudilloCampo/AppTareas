const express = require("express");
const tareaSchema = require ("../models/tarea");

const router = express.Router()

//Crear Usuario
router.post("/tarea", (req,res)=>{
    const tarea = tareaSchema(req.body);
    tarea.save()
    .then((data)=>res.json(data))
    .catch((error)=> res.json({message:error}))

})

//Buscar usuarios
router.get("/tarea", (req,res)=>{
    tareaSchema
    .find()
    .then((data)=>res.json(data))
    .catch((error)=> res.json({message:error}))

})

//Encontrar Usuario 
router.get("/tarea/:id", (req,res)=>{
    const {id} = req.params;
    tareaSchema
    .findById(id)
    .then((data)=>res.json(data))
    .catch((error)=> res.json({message:error}))

})

// Actualizar Usuario
router.put("/tarea/:id", (req,res)=>{
    const {id} = req.params;
    const {nombre,prioridad,estado}=req.body
    tareaSchema
    .updateOne({_id: id},{$set:{nombre,prioridad,estado}})
    .then((data)=>res.json(data))
    .catch((error)=> res.json({message:error}))

})

// Eliminar usuario
router.delete("/tarea/:id", (req,res)=>{
    const {id} = req.params;
    tareaSchema
        .deleteOne({_id: id})
        .then((data)=>res.json(data))
        .catch((error)=> res.json({message:error}))

})

module.exports = router;