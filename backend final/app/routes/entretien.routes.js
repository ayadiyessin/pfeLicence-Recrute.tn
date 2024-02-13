module.exports = (app) => {
    const entretiens = require('../controllers/entretien.controller.js');


    app.post('/entretiens', entretiens.create);

    
    app.get('/entretiens', entretiens.findAll);

   
    app.get('/entretiens/:entretienId', entretiens.findOne);

    
    app.put('/entretiens/:entretienId', entretiens.update);

    
    app.delete('/entretiens/:entretienId', entretiens.delete);
}
