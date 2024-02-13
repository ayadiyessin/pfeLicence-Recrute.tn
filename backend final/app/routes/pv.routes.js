module.exports = (app) => {
    const pvs = require('../controllers/pv.controller.js');


    app.post('/pvs', pvs.create);

    
    app.get('/pvs', pvs.findAll);

   
    app.get('/pvs/:pvId', pvs.findOne);

    
    app.put('/pvs/:pvId', pvs.update);

    
    app.delete('/pvs/:pvId', pvs.delete);
}
