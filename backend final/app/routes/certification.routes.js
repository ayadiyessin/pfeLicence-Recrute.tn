module.exports = (app) => {
    const certifications = require('../controllers/certification.controller.js');


    app.post('/certifications', certifications.create);

    
    app.get('/certifications', certifications.findAll);

   
    app.get('/certifications/:certificationId', certifications.findOne);

    
    app.put('/certifications/:certificationId', certifications.update);

    
    app.delete('/certifications/:certificationId', certifications.delete);
}
