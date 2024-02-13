module.exports = (app) => {
    const vieassociatives = require('../controllers/vieassociative.controller.js');


    app.post('/vieassociatives', vieassociatives.create);

    
    app.get('/vieassociatives', vieassociatives.findAll);

   
    app.get('/vieassociatives/:vieassociativeId', vieassociatives.findOne);

    
    app.put('/vieassociatives/:vieassociativeId', vieassociatives.update);

    
    app.delete('/vieassociatives/:vieassociativeId', vieassociatives.delete);
}
