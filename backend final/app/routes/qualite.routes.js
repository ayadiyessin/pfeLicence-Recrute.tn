module.exports = (app) => {
    const qualites = require('../controllers/qualite.controller.js');


    app.post('/qualites', qualites.create);

    
    app.get('/qualites', qualites.findAll);

   
    app.get('/qualites/:qualiteId', qualites.findOne);

    
    app.put('/qualites/:qualiteId', qualites.update);

    
    app.delete('/qualites/:qualiteId', qualites.delete);
}
