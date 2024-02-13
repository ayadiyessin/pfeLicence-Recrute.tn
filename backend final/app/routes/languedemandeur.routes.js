module.exports = (app) => {
    const languedemandeurs = require('../controllers/languedemandeur.controller.js');


    app.post('/languedemandeurs', languedemandeurs.create);

    
    app.get('/languedemandeurs', languedemandeurs.findAll);

   
    app.get('/languedemandeurs/:languedemandeurId', languedemandeurs.findOne);

    
    app.put('/languedemandeurs/:languedemandeurId', languedemandeurs.update);

    
    app.delete('/languedemandeurs/:languedemandeurId', languedemandeurs.delete);
}
