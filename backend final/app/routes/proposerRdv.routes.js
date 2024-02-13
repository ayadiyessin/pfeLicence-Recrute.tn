module.exports = (app) => {
    const proposerRdvs = require('../controllers/proposerRdv.controller.js');


    app.post('/proposerRdvs', proposerRdvs.create);

    
    app.get('/proposerRdvs', proposerRdvs.findAll);

   
    app.get('/proposerRdvs/:proposerRdvId', proposerRdvs.findOne);

    
    app.put('/proposerRdvs/:proposerRdvId', proposerRdvs.update);

    
    app.delete('/proposerRdvs/:proposerRdvId', proposerRdvs.delete);
}
