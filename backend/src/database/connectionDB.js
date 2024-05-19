const mongoose = require('mongoose');


const connection = function(){
    mongoose.connect("mongodb://127.0.0.1:27017/controlecontas?directConnection=true&serverSelectionTimeoutMS=2000");
    console.log("Conectado ao banco de dados");
}

module.exports = connection;
