module.exports = (app) => {
    const competencedemandeurs = require('../controllers/competencedemandeur.controller.js');


    app.post('/competencedemandeurs', competencedemandeurs.create);

    
    app.get('/competencedemandeurs', competencedemandeurs.findAll);

   
    app.get('/competencedemandeurs/:competencedemandeurId', competencedemandeurs.findOne);

    
    app.put('/competencedemandeurs/:competencedemandeurId', competencedemandeurs.update);

    
    app.delete('/competencedemandeurs/:competencedemandeurId', competencedemandeurs.delete);
}
