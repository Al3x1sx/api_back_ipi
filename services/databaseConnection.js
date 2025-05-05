
const mongoose = require('mongoose');


module.exports.connectDataBase = () => {
    mongoose.connect(process.env.MONGO_CONNECTION,   
        { useNewUrlParser:true, 
        useUnifiedTopology:true,
        dbName: "API_FINAL_PROJECT"})   
        .then(() =>console.log('Connexion à MongoDB réussie !'))   
        .catch(() =>console.log('Connexion à MongoDB échouée !'));     
}
