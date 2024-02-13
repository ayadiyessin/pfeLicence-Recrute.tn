const Qualite = require('../models/qualite.model.js');

// Create and Save a new qualite
exports.create = (req, res) => {
    // Validate request
    if(!req.body.NOM_QUA) {
        return res.status(400).send({
            message: "qualite content can not be empty"
        });
    }

    // Create a qualite
    const qualite = new Qualite({
        NOM_QUA: req.body.NOM_QUA,
        ID_DEMANDEUR: req.body.ID_DEMANDEUR
    });

    // Save qualite in the database
    qualite.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the qualite."
        });
    });
};

// Retrieve and return all qualite from the database.
exports.findAll = (req, res) => {
    Qualite.find()
    .then(qualites => {
        res.send(qualites);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving qualites."
        });
    });
};

// Find a single qualite with a qualiteId
exports.findOne = (req, res) => {
    Qualite.findById(req.params.qualiteId)
    .then(qualite => {
        if(!qualite) {
            return res.status(404).send({
                message: "qualite not found with id " + req.params.qualiteId
            });            
        }
        res.send(qualite);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "qualite not found with id " + req.params.qualiteId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving qualite with id " + req.params.qualiteId
        });
    });
};

// Update a qualite identified by the qualiteId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.NOM_QUA) {
        return res.status(400).send({
            message: "qualite content can not be empty"
        });
    }

    // Find qualite and update it with the request body
    Qualite.findByIdAndUpdate(req.params.qualiteId, {
        NOM_QUA: req.body.NOM_QUA,
        ID_DEMANDEUR: req.body.ID_DEMANDEUR
    }, {new: true})
    .then(qualite => {
        if(!qualite) {
            return res.status(404).send({
                message: "qualite not found with id " + req.params.qualiteId
            });
        }
        res.send(qualite);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "qualite not found with id " + req.params.qualiteId
            });                
        }
        return res.status(500).send({
            message: "Error updating qualite with id " + req.params.qualiteId
        });
    });
};

// Delete a qualite with the specified qualiteId in the request
exports.delete = (req, res) => {
    Qualite.findByIdAndRemove(req.params.qualiteId)
    .then(qualite => {
        if(!qualite) {
            return res.status(404).send({
                message: "qualite not found with id " + req.params.qualiteId
            });
        }
        res.send({message: "qualite deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "qualite not found with id " + req.params.qualiteId
            });                
        }
        return res.status(500).send({
            message: "Could not delete qualite with id " + req.params.qualiteId
        });
    });
};
