const mongoose = require('mongoose');

module.exports = mongoose.model("Contas", {
    id: Number,
    nome: String,
    tipo: String,
    mes : Number,
    ano : Number,
    value: Number,
    user : String
})