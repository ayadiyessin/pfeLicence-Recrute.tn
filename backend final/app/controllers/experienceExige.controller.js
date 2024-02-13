const ExperienceExige = require('../models/experienceExige.model.js');

// Create and Save a new experienceExige
exports.create = (req, res) => {
    // Validate request
    if(!req.body.NOM_EXP_OFF) {
        return res.status(400).send({
            message: "experienceExige content can not be empty"
        });
    }

    // Create a experienceExige
    const experienceExige = new ExperienceExige({
        NOM_EXP_OFF: req.body.NOM_EXP_OFF,
        NB_EXP_OFF: req.body.NB_EXP_OFF,
        ID_OFFRE: req.body.ID_OFFRE
    });

    // Save experienceExige in the database
    experienceExige.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the experienceExige."
        });
    });
};

// Retrieve and return all experienceExige from the database.
exports.findAll = (req, res) => {
    ExperienceExige.find()
    .then(experienceExiges => {
        res.send(experienceExiges);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving experienceExiges."
        });
    });
};

// Find a single experienceExige with a experienceExigeId
exports.findOne = (req, res) => {
    ExperienceExige.findById(req.params.experienceExigeId)
    .then(experienceExige => {
        if(!experienceExige) {
            return res.status(404).send({
                message: "experienceExige not found with id " + req.params.experienceExigeId
            });            
        }
        res.send(experienceExige);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "experienceExige not found with id " + req.params.experienceExigeId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving experienceExige with id " + req.params.experienceExigeId
        });
    });
};

// Update a experienceExige identified by the experienceExigeId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.NOM_EXP_OFF) {
        return res.status(400).send({
            message: "experienceExige content can not be empty"
        });
    }

    // Find experienceExige and update it with the request body
    ExperienceExige.findByIdAndUpdate(req.params.experienceExigeId, {
        NOM_EXP_OFF: req.body.NOM_EXP_OFF,
        NB_EXP_OFF: req.body.NB_EXP_OFF,
        ID_OFFRE: req.body.ID_OFFRE
    }, {new: true})
    .then(experienceExige => {
        if(!experienceExige) {
            return res.status(404).send({
                message: "experienceExige not found with id " + req.params.experienceExigeId
            });
        }
        res.send(experienceExige);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "experienceExige not found with id " + req.params.experienceExigeId
            });                
        }
        return res.status(500).send({
            message: "Error updating experienceExige with id " + req.params.experienceExigeId
        });
    });
};

// Delete a experienceExige with the specified experienceExigeId in the request
exports.delete = (req, res) => {
    ExperienceExige.findByIdAndRemove(req.params.experienceExigeId)
    .then(experienceExige => {
        if(!experienceExige) {
            return res.status(404).send({
                message: "experienceExige not found with id " + req.params.experienceExigeId
            });
        }
        res.send({message: "experienceExige deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "experienceExige not found with id " + req.params.experienceExigeId
            });                
        }
        return res.status(500).send({
            message: "Could not delete experienceExige with id " + req.params.experienceExigeId
        });
    });
};
