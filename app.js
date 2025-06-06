const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();
const port = 6969;
const connectDataBase = require("./services/databaseConnection");
const userAuthRoute = require("./routes/userAuthRoutes");
const categoryRoutes = require('./routes/categoryRoutes');
const partnerRoutes = require('./routes/partnerRoutes');
const configRoutes = require('./routes/configurationRoutes');
const componentRoutes = require('./routes/componentRoutes');

//charge ficher de config
dotenv.config();

//récupère les données au format json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors()); 

connectDataBase.connectDataBase();

app.use("/auth", userAuthRoute);
app.use('/api/categories', categoryRoutes);
app.use('/api/partners', partnerRoutes);
app.use('/api/configurations', configRoutes);
app.use('/api/components', componentRoutes);

app.listen(port, () => {
    console.log('youpiiiii le serveur a démarré sur le port ' + port);
});