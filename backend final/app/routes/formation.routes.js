module.exports = (app) => {
    const formations = require('../controllers/formation.controller.js');


    app.post('/formations', formations.create);

    
    app.get('/formations', formations.findAll);

   
    app.get('/formations/:formationId', formations.findOne);

    
    app.put('/formations/:formationId', formations.update);

    
    app.delete('/formations/:formationId', formations.delete);
}
