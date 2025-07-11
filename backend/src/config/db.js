const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Mongo DB conectado com sucesso!");
    } catch (erro) {
        console.error("Erro ao conectar ao Mongo DB:", erro);
        process.exit(1);
        }
    };

module.exports = connectDB;