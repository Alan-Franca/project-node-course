const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Tenta conectar à base de dados
        await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@nodecourse.2mxlivr.mongodb.net/?retryWrites=true&w=majority&appName=NodeCourse`);

        // Se a linha de cima for bem-sucedida, esta linha será executada
        console.log('Connected to MongoDB successfully!');

    } catch (error) {
        // Se houver um erro na conexão, o código dentro do 'catch' será executado
        console.error('Error when connecting MongoDB:', error.message);

        // Opcional: Encerra o processo da aplicação se não conseguir conectar à base de dados
        process.exit(1);
    }
};

module.exports = connectDB;
