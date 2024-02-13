module.exports = (app) => {
    const etudeexiges = require('../controllers/etudeexige.controller.js');


    app.post('/etudeexiges', etudeexiges.create);

    
    app.get('/etudeexiges', etudeexiges.findAll);

   
    app.get('/etudeexiges/:etudeexigeId', etudeexiges.findOne);

    
    app.put('/etudeexiges/:etudeexigeId', etudeexiges.update);

    
    app.delete('/etudeexiges/:etudeexigeId', etudeexiges.delete);
}
