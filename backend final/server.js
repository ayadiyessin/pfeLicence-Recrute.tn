const express = require('express');
var cors = require('cors')
const bodyParser = require('body-parser');

// create express app
const app = express();
app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
	useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to Rest API By Chaaben Group."});
});

require('./app/routes/admin.routes.js')(app);
require('./app/routes/recruteur.routes.js')(app);
require('./app/routes/reclamation.routes.js')(app);
require('./app/routes/message.routes.js')(app);
require('./app/routes/proposerRdv.routes.js')(app);
require('./app/routes/candidature.routes.js')(app);
require('./app/routes/offre.routes.js')(app);
require('./app/routes/contact.routes.js')(app);
require('./app/routes/favori.routes.js')(app);
require('./app/routes/favoriDem.routes.js')(app);
require('./app/routes/commentaire.routes.js')(app);
require('./app/routes/horaire.routes.js')(app);
require('./app/routes/experienceExige.routes.js')(app);
require('./app/routes/test.routes.js')(app);
require('./app/routes/question.routes.js')(app);
require('./app/routes/entretien.routes.js')(app);
require('./app/routes/pv.routes.js')(app);
require('./app/routes/langue.routes.js')(app);
require('./app/routes/langueOffre.routes.js')(app);
require('./app/routes/score.routes.js')(app);
require('./app/routes/demandeur.routes.js')(app);
require('./app/routes/qualite.routes.js')(app);
require('./app/routes/centresinteret.routes.js')(app);
require('./app/routes/projet.routes.js')(app);
require('./app/routes/vieassociative.routes.js')(app);
require('./app/routes/certification.routes.js')(app);
require('./app/routes/formation.routes.js')(app);
require('./app/routes/experience.routes.js')(app);
require('./app/routes/diplome.routes.js')(app);
require('./app/routes/diplomedemandeur.routes.js')(app);
require('./app/routes/etudeexige.routes.js')(app);
require('./app/routes/competence.routes.js')(app);
require('./app/routes/competencedemandeur.routes.js')(app);
require('./app/routes/competenceoffre.routes.js')(app);
require('./app/routes/languedemandeur.routes.js')(app);

// listen for requests
app.listen(3000, "192.168.43.96",  () => {
    console.log("Server is listening on port 3000");
});