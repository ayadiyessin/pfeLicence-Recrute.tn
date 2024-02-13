module.exports = (app) => {
    const demandeurs = require('../controllers/demandeur.controller.js');


    app.post('/demandeurs', demandeurs.create);

    
    app.get('/demandeurs', demandeurs.findAll);

   
    app.get('/demandeurs/:demandeurId', demandeurs.findOne);

    
    app.put('/demandeurs/:demandeurId', demandeurs.update);

    
    app.delete('/demandeurs/:demandeurId', demandeurs.delete);
}
