module.exports = (app) => {
    const scores = require('../controllers/score.controller.js');


    app.post('/scores', scores.create);

    
    app.get('/scores', scores.findAll);

   
    app.get('/scores/:scoreId', scores.findOne);

    
    app.put('/scores/:scoreId', scores.update);

    
    app.delete('/scores/:scoreId', scores.delete);
}
