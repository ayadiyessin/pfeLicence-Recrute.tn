module.exports = (app) => {
    const diplomedemandeurs = require('../controllers/diplomedemandeur.controller.js');


    app.post('/diplomedemandeurs', diplomedemandeurs.create);

    
    app.get('/diplomedemandeurs', diplomedemandeurs.findAll);

   
    app.get('/diplomedemandeurs/:diplomedemandeurId', diplomedemandeurs.findOne);

    
    app.put('/diplomedemandeurs/:diplomedemandeurId', diplomedemandeurs.update);

    
    app.delete('/diplomedemandeurs/:diplomedemandeurId', diplomedemandeurs.delete);
}
