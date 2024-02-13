const Score = require('../models/score.model.js');

// Create and Save a new score
exports.create = (req, res) => {
    // Validate request
    if(!req.body.SCORE) {
        return res.status(400).send({
            message: "score content can not be empty"
        });
    }

    // Create a score
    const score = new Score({
        SCORE: req.body.SCORE,
        ID_DEMANDEUR: req.body.ID_DEMANDEUR,
        ID_TEST: req.body.ID_TEST
    });

    // Save score in the database
    score.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the score."
        });
    });
};

// Retrieve and return all score from the database.
exports.findAll = (req, res) => {
    Score.find()
    .then(scores => {
        res.send(scores);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving scores."
        });
    });
};

// Find a single score with a scoreId
exports.findOne = (req, res) => {
    Score.findById(req.params.scoreId)
    .then(score => {
        if(!score) {
            return res.status(404).send({
                message: "score not found with id " + req.params.scoreId
            });            
        }
        res.send(score);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "score not found with id " + req.params.scoreId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving score with id " + req.params.scoreId
        });
    });
};

// Update a score identified by the scoreId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.SCORE) {
        return res.status(400).send({
            message: "score content can not be empty"
        });
    }

    // Find score and update it with the request body
    Score.findByIdAndUpdate(req.params.scoreId, {
        SCORE: req.body.SCORE,
        ID_DEMANDEUR: req.body.ID_DEMANDEUR,
        ID_TEST: req.body.ID_TEST
    }, {new: true})
    .then(score => {
        if(!score) {
            return res.status(404).send({
                message: "score not found with id " + req.params.scoreId
            });
        }
        res.send(score);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "score not found with id " + req.params.scoreId
            });                
        }
        return res.status(500).send({
            message: "Error updating score with id " + req.params.scoreId
        });
    });
};

// Delete a score with the specified scoreId in the request
exports.delete = (req, res) => {
    Score.findByIdAndRemove(req.params.scoreId)
    .then(score => {
        if(!score) {
            return res.status(404).send({
                message: "score not found with id " + req.params.scoreId
            });
        }
        res.send({message: "score deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "score not found with id " + req.params.scoreId
            });                
        }
        return res.status(500).send({
            message: "Could not delete score with id " + req.params.scoreId
        });
    });
};
