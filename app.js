const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const app = express();
const port = 6969;
const connectDataBase = require("./services/databaseConnection");
const userAuthRoute = require("./routes/userAuthRoutes");

//charge ficher de config
dotenv.config();

//récupère les données au format json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

connectDataBase.connectDataBase();

app.use("/auth", userAuthRoute);

app.listen(port, () => {
    console.log('youpiiiii le serveur a démarré sur le port ' + port);
});