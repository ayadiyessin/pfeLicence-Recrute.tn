module.exports = (app) => {
    const centresinterets = require('../controllers/centresinteret.controller.js');


    app.post('/centresinterets', centresinterets.create);

    
    app.get('/centresinterets', centresinterets.findAll);

   
    app.get('/centresinterets/:centresinteretId', centresinterets.findOne);

    
    app.put('/centresinterets/:centresinteretId', centresinterets.update);

    
    app.delete('/centresinterets/:centresinteretId', centresinterets.delete);
}
