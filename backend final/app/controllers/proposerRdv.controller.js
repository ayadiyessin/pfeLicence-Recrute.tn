const ProposerRdv = require('../models/proposerRdv.model.js');

// Create and Save a new proposerRdv
exports.create = (req, res) => {
    // Validate request
    if(!req.body.DATE) {
        return res.status(400).send({
            message: "proposerRdv content can not be empty"
        });
    }

    // Create a proposerRdv
    const proposerRdv = new ProposerRdv({
        DATE: req.body.DATE,
        HEURE:req.body.HEURE,
        CONF_DATE: req.body.CONF_DATE,
        ID_RECRUTEUR: req.body.ID_RECRUTEUR,
        ID_CANDIDATURE: req.body.ID_CANDIDATURE 
    });

    // Save proposerRdv in the database
    proposerRdv.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the proposerRdv."
        });
    });
};

// Retrieve and return all proposerRdv from the database.
exports.findAll = (req, res) => {
    ProposerRdv.find()
    .then(proposerRdvs => {
        res.send(proposerRdvs);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving proposerRdvs."
        });
    });
};

// Find a single proposerRdv with a proposerRdvId
exports.findOne = (req, res) => {
    ProposerRdv.findById(req.params.proposerRdvId)
    .then(proposerRdv => {
        if(!proposerRdv) {
            return res.status(404).send({
                message: "proposerRdv not found with id " + req.params.proposerRdvId
            });            
        }
        res.send(proposerRdv);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "proposerRdv not found with id " + req.params.proposerRdvId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving proposerRdv with id " + req.params.proposerRdvId
        });
    });
};

// Update a proposerRdv identified by the proposerRdvId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.DATE) {
        return res.status(400).send({
            message: "proposerRdv content can not be empty"
        });
    }

    // Find proposerRdv and update it with the request body
    ProposerRdv.findByIdAndUpdate(req.params.proposerRdvId, {
        DATE: req.body.DATE,
        HEURE:req.body.HEURE,
        CONF_DATE: req.body.CONF_DATE,
        ID_RECRUTEUR: req.body.ID_RECRUTEUR,
        ID_CANDIDATURE: req.body.ID_CANDIDATURE
    }, {new: true})
    .then(proposerRdv => {
        if(!proposerRdv) {
            return res.status(404).send({
                message: "proposerRdv not found with id " + req.params.proposerRdvId
            });
        }
        res.send(proposerRdv);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "proposerRdv not found with id " + req.params.proposerRdvId
            });                
        }
        return res.status(500).send({
            message: "Error updating proposerRdv with id " + req.params.proposerRdvId
        });
    });
};

// Delete a proposerRdv with the specified proposerRdvId in the request
exports.delete = (req, res) => {
    ProposerRdv.findByIdAndRemove(req.params.proposerRdvId)
    .then(proposerRdv => {
        if(!proposerRdv) {
            return res.status(404).send({
                message: "proposerRdv not found with id " + req.params.proposerRdvId
            });
        }
        res.send({message: "proposerRdv deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "proposerRdv not found with id " + req.params.proposerRdvId
            });                
        }
        return res.status(500).send({
            message: "Could not delete proposerRdv with id " + req.params.proposerRdvId
        });
    });
};
