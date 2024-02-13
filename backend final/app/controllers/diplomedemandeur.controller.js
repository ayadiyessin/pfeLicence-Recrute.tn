const Diplomedemandeur = require('../models/diplomedemandeur.model.js');

// Create and Save a new diplomedemandeur
exports.create = (req, res) => {
    // Validate request
    if(!req.body.NOM_ECOL_DIP) {
        return res.status(400).send({
            message: "diplome demandeur content can not be empty"
        });
    }

    // Create a diplomedemandeur
    const diplomedemandeur = new Diplomedemandeur({
        NOM_ECOL_DIP: req.body.NOM_ECOL_DIP,
        SPECIA_DIP: req.body.SPECIA_DIP,
        DAT_DEB_DIP: req.body.DAT_DEB_DIP,
        DAT_FIN_DIP: req.body.DAT_FIN_DIP,
        ID_DIPLOME: req.body.ID_DIPLOME,
        ID_DEMANDEUR: req.body.ID_DEMANDEUR
    });

    // Save diplomedemandeur in the database
    diplomedemandeur.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the diplome demandeur."
        });
    });
};

// Retrieve and return all diplomedemandeur from the database.
exports.findAll = (req, res) => {
    Diplomedemandeur.find()
    .then(diplomedemandeurs => {
        res.send(diplomedemandeurs);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving diplome demandeurs."
        });
    });
};

// Find a single diplomedemandeur with a diplomedemandeurId
exports.findOne = (req, res) => {
    Diplomedemandeur.findById(req.params.diplomedemandeurId)
    .then(diplomedemandeur => {
        if(!diplomedemandeur) {
            return res.status(404).send({
                message: "diplome demandeur not found with id " + req.params.diplomedemandeurId
            });            
        }
        res.send(diplomedemandeur);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "diplome demandeur not found with id " + req.params.diplomedemandeurId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving diplome demandeur with id " + req.params.diplomedemandeurId
        });
    });
};

// Update a diplomedemandeur identified by the diplomedemandeurId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.NOM_ECOL_DIP) {
        return res.status(400).send({
            message: "diplome demandeur content can not be empty"
        });
    }

    // Find diplomedemandeur and update it with the request body
    Diplomedemandeur.findByIdAndUpdate(req.params.diplomedemandeurId, {
        NOM_ECOL_DIP: req.body.NOM_ECOL_DIP,
        SPECIA_DIP: req.body.SPECIA_DIP,
        DAT_DEB_DIP: req.body.DAT_DEB_DIP,
        DAT_FIN_DIP: req.body.DAT_FIN_DIP,
        ID_DIPLOME: req.body.ID_DIPLOME,
        ID_DEMANDEUR: req.body.ID_DEMANDEUR
    }, {new: true})
    .then(diplomedemandeur => {
        if(!diplomedemandeur) {
            return res.status(404).send({
                message: "diplome demandeur not found with id " + req.params.diplomedemandeurId
            });
        }
        res.send(diplomedemandeur);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "diplome demandeur not found with id " + req.params.diplomedemandeurId
            });                
        }
        return res.status(500).send({
            message: "Error updating diplome demandeur with id " + req.params.diplomedemandeurId
        });
    });
};

// Delete a diplomedemandeur with the specified diplomedemandeurId in the request
exports.delete = (req, res) => {
    Diplomedemandeur.findByIdAndRemove(req.params.diplomedemandeurId)
    .then(diplomedemandeur => {
        if(!diplomedemandeur) {
            return res.status(404).send({
                message: "diplome demandeur not found with id " + req.params.diplomedemandeurId
            });
        }
        res.send({message: "diplome demandeur deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "diplome demandeur not found with id " + req.params.diplomedemandeurId
            });                
        }
        return res.status(500).send({
            message: "Could not delete diplome demandeur with id " + req.params.diplomedemandeurId
        });
    });
};
