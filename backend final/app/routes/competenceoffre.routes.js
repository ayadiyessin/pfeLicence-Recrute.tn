module.exports = (app) => {
    const competenceoffres = require('../controllers/competenceoffre.controller.js');


    app.post('/competenceoffres', competenceoffres.create);

    
    app.get('/competenceoffres', competenceoffres.findAll);

   
    app.get('/competenceoffres/:competenceoffreId', competenceoffres.findOne);

    
    app.put('/competenceoffres/:competenceoffreId', competenceoffres.update);

    
    app.delete('/competenceoffres/:competenceoffreId', competenceoffres.delete);
}
