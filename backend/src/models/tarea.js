const mongoose = require("mongoose");

const tareaSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    prioridad: {
        type: String, 
        enum: ['alta', 'media', 'baja'], 
        required: true
    },
    estado: {
        type: String,
        enum: ['pendiente', 'en progreso', 'completado'], 
        required: true
    },
});

module.exports = mongoose.model("Tarea", tareaSchema);
