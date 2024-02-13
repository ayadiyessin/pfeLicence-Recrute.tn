module.exports = (app) => {
    const candidatures = require('../controllers/candidature.controller.js');


    app.post('/candidatures', candidatures.create);

    
    app.get('/candidatures', candidatures.findAll);

   
    app.get('/candidatures/:candidatureId', candidatures.findOne);

    
    app.put('/candidatures/:candidatureId', candidatures.update);

    
    app.delete('/candidatures/:candidatureId', candidatures.delete);
}
