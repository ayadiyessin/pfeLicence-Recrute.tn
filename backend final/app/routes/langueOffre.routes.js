module.exports = (app) => {
    const langueOffres = require('../controllers/langueOffre.controller.js');


    app.post('/langueOffres', langueOffres.create);

    
    app.get('/langueOffres', langueOffres.findAll);

   
    app.get('/langueOffres/:langueOffreId', langueOffres.findOne);

    
    app.put('/langueOffres/:langueOffreId', langueOffres.update);

    
    app.delete('/langueOffres/:langueOffreId', langueOffres.delete);
}
