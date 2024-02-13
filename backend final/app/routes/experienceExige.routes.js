module.exports = (app) => {
    const experienceExiges = require('../controllers/experienceExige.controller.js');


    app.post('/experienceExiges', experienceExiges.create);

    
    app.get('/experienceExiges', experienceExiges.findAll);

   
    app.get('/experienceExiges/:experienceExigeId', experienceExiges.findOne);

    
    app.put('/experienceExiges/:experienceExigeId', experienceExiges.update);

    
    app.delete('/experienceExiges/:experienceExigeId', experienceExiges.delete);
}
