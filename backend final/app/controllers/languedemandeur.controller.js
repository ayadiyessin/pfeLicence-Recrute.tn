const Languedemandeur = require('../models/languedemandeur.model.js');

// Create and Save a new languedemandeur
exports.create = (req, res) => {
    // Validate request
    if(!req.body.NIV_LANG_DEM) {
        return res.status(400).send({
            message: "langue demandeur content can not be empty"
        });
    }

    // Create a languedemandeur
    const languedemandeur = new Languedemandeur({
        NIV_LANG_DEM: req.body.NIV_LANG_DEM,
        ID_LANGUE: req.body.ID_LANGUE,
        ID_DEMANDEUR: req.body.ID_DEMANDEUR
    });

    // Save languedemandeur in the database
    languedemandeur.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the langue demandeur."
        });
    });
};

// Retrieve and return all languedemandeur from the database.
exports.findAll = (req, res) => {
    Languedemandeur.find()
    .then(languedemandeurs => {
        res.send(languedemandeurs);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving langue demandeurs."
        });
    });
};

// Find a single languedemandeur with a languedemandeurId
exports.findOne = (req, res) => {
    Languedemandeur.findById(req.params.languedemandeurId)
    .then(languedemandeur => {
        if(!languedemandeur) {
            return res.status(404).send({
                message: "langue demandeur not found with id " + req.params.languedemandeurId
            });            
        }
        res.send(languedemandeur);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "langue demandeur not found with id " + req.params.languedemandeurId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving langue demandeur with id " + req.params.languedemandeurId
        });
    });
};

// Update a languedemandeur identified by the languedemandeurId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.NIV_LANG_DEM) {
        return res.status(400).send({
            message: "langue demandeur content can not be empty"
        });
    }

    // Find languedemandeur and update it with the request body
    Languedemandeur.findByIdAndUpdate(req.params.languedemandeurId, {
        NIV_LANG_DEM: req.body.NIV_LANG_DEM,
        ID_LANGUE: req.body.ID_LANGUE,
        ID_DEMANDEUR: req.body.ID_DEMANDEUR
    }, {new: true})
    .then(languedemandeur => {
        if(!languedemandeur) {
            return res.status(404).send({
                message: "langue demandeur not found with id " + req.params.languedemandeurId
            });
        }
        res.send(languedemandeur);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "langue demandeur not found with id " + req.params.languedemandeurId
            });                
        }
        return res.status(500).send({
            message: "Error updating langue demandeur with id " + req.params.languedemandeurId
        });
    });
};

// Delete a languedemandeur with the specified languedemandeurId in the request
exports.delete = (req, res) => {
    Languedemandeur.findByIdAndRemove(req.params.languedemandeurId)
    .then(languedemandeur => {
        if(!languedemandeur) {
            return res.status(404).send({
                message: "langue demandeur not found with id " + req.params.languedemandeurId
            });
        }
        res.send({message: "langue demandeur deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "langue demandeur not found with id " + req.params.languedemandeurId
            });                
        }
        return res.status(500).send({
            message: "Could not delete langue demandeur with id " + req.params.languedemandeurId
        });
    });
};
