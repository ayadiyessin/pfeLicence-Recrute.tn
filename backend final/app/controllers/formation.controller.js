const Formation = require('../models/formation.model.js');

// Create and Save a new formation
exports.create = (req, res) => {
    // Validate request
    if(!req.body.NOM_FOR) {
        return res.status(400).send({
            message: "formation content can not be empty"
        });
    }

    // Create a formation
    const formation = new Formation({
        NOM_FOR: req.body.NOM_FOR,
        DESC_FOR: req.body.DESC_FOR,
        DAT_DEB_FOR: req.body.DAT_DEB_FOR,
        DAT_FIN_FOR: req.body.DAT_FIN_FOR,
        ID_DEMANDEUR: req.body.ID_DEMANDEUR
    });

    // Save formation in the database
    formation.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the formation."
        });
    });
};

// Retrieve and return all formation from the database.
exports.findAll = (req, res) => {
    Formation.find()
    .then(formations => {
        res.send(formations);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving formation."
        });
    });
};

// Find a single formation with a formationId
exports.findOne = (req, res) => {
    Formation.findById(req.params.formationId)
    .then(formation => {
        if(!formation) {
            return res.status(404).send({
                message: "formation not found with id " + req.params.formationId
            });            
        }
        res.send(formation);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "formation not found with id " + req.params.formationId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving formation with id " + req.params.formationId
        });
    });
};

// Update a formation identified by the formationId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.NOM_FOR) {
        return res.status(400).send({
            message: "formation content can not be empty"
        });
    }

    // Find formation and update it with the request body
    Formation.findByIdAndUpdate(req.params.formationId, {
        NOM_FOR: req.body.NOM_FOR,
        DESC_FOR: req.body.DESC_FOR,
        DAT_DEB_FOR: req.body.DAT_DEB_FOR,
        DAT_FIN_FOR: req.body.DAT_FIN_FOR,
        ID_DEMANDEUR: req.body.ID_DEMANDEUR
    }, {new: true})
    .then(formation => {
        if(!formation) {
            return res.status(404).send({
                message: "formation not found with id " + req.params.formationId
            });
        }
        res.send(formation);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "formation not found with id " + req.params.formationId
            });                
        }
        return res.status(500).send({
            message: "Error updating formation with id " + req.params.formationId
        });
    });
};

// Delete a formation with the specified formationId in the request
exports.delete = (req, res) => {
    Formation.findByIdAndRemove(req.params.formationId)
    .then(formation => {
        if(!formation) {
            return res.status(404).send({
                message: "formation not found with id " + req.params.formationId
            });
        }
        res.send({message: "formation deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "formation not found with id " + req.params.formationId
            });                
        }
        return res.status(500).send({
            message: "Could not delete formation with id " + req.params.formationId
        });
    });
};
