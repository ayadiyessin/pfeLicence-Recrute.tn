const Reclamation = require('../models/reclamation.model.js');

// Create and Save a new reclamation
exports.create = (req, res) => {
    // Validate request
    if(!req.body.SUJ_RECL) {
        return res.status(400).send({
            message: "reclamation content can not be empty"
        });
    }

    // Create a reclamation
    const reclamation = new Reclamation({
        SUJ_RECL: req.body.SUJ_RECL,
        DESC_RECL: req.body.DESC_RECL,
        CAPTU_RECL: req.body.CAPTU_RECL,
        VUE_RECL: req.body.VUE_RECL,
        ID_RECRUTEUR: req.body.ID_RECRUTEUR,
        ID_OFFRE: req.body.ID_OFFRE,
        ID_DEMANDEUR: req.body.ID_DEMANDEUR,
        RESPONS_ENV_RECL: req.body.RESPONS_ENV_RECL
    });

    // Save reclamation in the database
    reclamation.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the reclamation."
        });
    });
};

// Retrieve and return all reclamation from the database.
exports.findAll = (req, res) => {
    Reclamation.find()
    .then(reclamations => {
        res.send(reclamations);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving reclamations."
        });
    });
};

// Find a single reclamation with a reclamationId
exports.findOne = (req, res) => {
    Reclamation.findById(req.params.reclamationId)
    .then(reclamation => {
        if(!reclamation) {
            return res.status(404).send({
                message: "reclamation not found with id " + req.params.reclamationId
            });            
        }
        res.send(reclamation);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "reclamation not found with id " + req.params.reclamationId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving reclamation with id " + req.params.reclamationId
        });
    });
};

// Update a reclamation identified by the reclamationId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.SUJ_RECL) {
        return res.status(400).send({
            message: "reclamation content can not be empty"
        });
    }

    // Find reclamation and update it with the request body
    Reclamation.findByIdAndUpdate(req.params.reclamationId, {
        SUJ_RECL: req.body.SUJ_RECL,
        DESC_RECL: req.body.DESC_RECL,
        CAPTU_RECL: req.body.CAPTU_RECL,
        VUE_RECL: req.body.VUE_RECL,
        ID_RECRUTEUR: req.body.ID_RECRUTEUR,
        ID_OFFRE: req.body.ID_OFFRE,
        ID_DEMANDEUR: req.body.ID_DEMANDEUR,
        RESPONS_ENV_RECL: req.body.RESPONS_ENV_RECL
    }, {new: true})
    .then(reclamation => {
        if(!reclamation) {
            return res.status(404).send({
                message: "reclamation not found with id " + req.params.reclamationId
            });
        }
        res.send(reclamation);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "reclamation not found with id " + req.params.reclamationId
            });                
        }
        return res.status(500).send({
            message: "Error updating reclamation with id " + req.params.reclamationId
        });
    });
};

// Delete a reclamation with the specified reclamationId in the request
exports.delete = (req, res) => {
    Reclamation.findByIdAndRemove(req.params.reclamationId)
    .then(reclamation => {
        if(!reclamation) {
            return res.status(404).send({
                message: "reclamation not found with id " + req.params.reclamationId
            });
        }
        res.send({message: "reclamation deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "reclamation not found with id " + req.params.reclamationId
            });                
        }
        return res.status(500).send({
            message: "Could not delete reclamation with id " + req.params.reclamationId
        });
    });
};
