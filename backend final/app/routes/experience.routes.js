module.exports = (app) => {
    const experiences = require('../controllers/experience.controller.js');


    app.post('/experiences', experiences.create);

    
    app.get('/experiences', experiences.findAll);

   
    app.get('/experiences/:experienceId', experiences.findOne);

    
    app.put('/experiences/:experienceId', experiences.update);

    
    app.delete('/experiences/:experienceId', experiences.delete);
}
