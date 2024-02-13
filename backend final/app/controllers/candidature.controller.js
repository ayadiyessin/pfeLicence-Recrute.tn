const Candidature = require('../models/candidature.model.js');

// Create and Save a new candidature
exports.create = (req, res) => {
    // Validate request
    if(!req.body.FAVORI_CAND) {
        return res.status(400).send({
            message: "candidature content can not be empty"
        });
    }

    // Create a candidature
    const candidature = new Candidature({
        FAVORI_CAND: req.body.FAVORI_CAND,
        ARCHV_CAND: req.body.ARCHV_CAND,
        ID_OFFRE: req.body.ID_OFFRE,
        ID_DEMANDEUR: req.body.ID_DEMANDEUR 
    });

    // Save candidature in the database
    candidature.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the candidature."
        });
    });
};

// Retrieve and return all candidature from the database.
exports.findAll = (req, res) => {
    Candidature.find()
    .then(candidatures => {
        res.send(candidatures);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving candidatures."
        });
    });
};

// Find a single candidature with a candidatureId
exports.findOne = (req, res) => {
    Candidature.findById(req.params.candidatureId)
    .then(candidature => {
        if(!candidature) {
            return res.status(404).send({
                message: "candidature not found with id " + req.params.candidatureId
            });            
        }
        res.send(candidature);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "candidature not found with id " + req.params.candidatureId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving candidature with id " + req.params.candidatureId
        });
    });
};

// Update a candidature identified by the candidatureId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.FAVORI_CAND) {
        return res.status(400).send({
            message: "candidature content can not be empty"
        });
    }

    // Find candidature and update it with the request body
    Candidature.findByIdAndUpdate(req.params.candidatureId, {
        FAVORI_CAND: req.body.FAVORI_CAND,
        ARCHV_CAND: req.body.ARCHV_CAND,
        ID_OFFRE: req.body.ID_OFFRE,
        ID_DEMANDEUR: req.body.ID_DEMANDEUR
    }, {new: true})
    .then(candidature => {
        if(!candidature) {
            return res.status(404).send({
                message: "candidature not found with id " + req.params.candidatureId
            });
        }
        res.send(candidature);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "candidature not found with id " + req.params.candidatureId
            });                
        }
        return res.status(500).send({
            message: "Error updating candidature with id " + req.params.candidatureId
        });
    });
};

// Delete a candidature with the specified candidatureId in the request
exports.delete = (req, res) => {
    Candidature.findByIdAndRemove(req.params.candidatureId)
    .then(candidature => {
        if(!candidature) {
            return res.status(404).send({
                message: "candidature not found with id " + req.params.candidatureId
            });
        }
        res.send({message: "candidature deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "candidature not found with id " + req.params.candidatureId
            });                
        }
        return res.status(500).send({
            message: "Could not delete candidature with id " + req.params.candidatureId
        });
    });
};
