module.exports = (app) => {
    const favoriDems = require('../controllers/favoriDem.controller.js');


    app.post('/favoriDems', favoriDems.create);

    
    app.get('/favoriDems', favoriDems.findAll);

   
    app.get('/favoriDems/:favoriDemId', favoriDems.findOne);

    
    app.put('/favoriDems/:favoriDemId', favoriDems.update);

    
    app.delete('/favoriDems/:favoriDemId', favoriDems.delete);
}
