const Competencedemandeur = require('../models/competencedemandeur.model.js');

// Create and Save a new competencedemandeur
exports.create = (req, res) => {
    // Validate request
    if(!req.body.NIV_COMP_DEM) {
        return res.status(400).send({
            message: "competence demandeur content can not be empty"
        });
    }

    // Create a competencedemandeur
    const competencedemandeur = new Competencedemandeur({
        NIV_COMP_DEM: req.body.NIV_COMP_DEM,
        ID_COMPETENCE: req.body.ID_COMPETENCE,
        ID_DEMANDEUR: req.body.ID_DEMANDEUR
    });

    // Save competencedemandeur in the database
    competencedemandeur.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the competence demandeur."
        });
    });
};

// Retrieve and return all competencedemandeur from the database.
exports.findAll = (req, res) => {
    Competencedemandeur.find()
    .then(competencedemandeurs => {
        res.send(competencedemandeurs);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving competence demandeurs."
        });
    });
};

// Find a single competencedemandeur with a competencedemandeurId
exports.findOne = (req, res) => {
    Competencedemandeur.findById(req.params.competencedemandeurId)
    .then(competencedemandeur => {
        if(!competencedemandeur) {
            return res.status(404).send({
                message: "competence demandeur not found with id " + req.params.competencedemandeurId
            });            
        }
        res.send(competencedemandeur);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "competence demandeur not found with id " + req.params.competencedemandeurId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving competence demandeur with id " + req.params.competencedemandeurId
        });
    });
};

// Update a competencedemandeur identified by the competencedemandeurId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.NIV_COMP_DEM) {
        return res.status(400).send({
            message: "competence demandeur content can not be empty"
        });
    }

    // Find competencedemandeur and update it with the request body
    Competencedemandeur.findByIdAndUpdate(req.params.competencedemandeurId, {
        NIV_COMP_DEM: req.body.NIV_COMP_DEM,
        ID_COMPETENCE: req.body.ID_COMPETENCE,
        ID_DEMANDEUR: req.body.ID_DEMANDEUR
    }, {new: true})
    .then(competencedemandeur => {
        if(!competencedemandeur) {
            return res.status(404).send({
                message: "competence demandeur not found with id " + req.params.competencedemandeurId
            });
        }
        res.send(competencedemandeur);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "competence demandeur not found with id " + req.params.competencedemandeurId
            });                
        }
        return res.status(500).send({
            message: "Error updating competence demandeur with id " + req.params.competencedemandeurId
        });
    });
};

// Delete a competencedemandeur with the specified competencedemandeurId in the request
exports.delete = (req, res) => {
    Competencedemandeur.findByIdAndRemove(req.params.competencedemandeurId)
    .then(competencedemandeur => {
        if(!competencedemandeur) {
            return res.status(404).send({
                message: "competence demandeur not found with id " + req.params.competencedemandeurId
            });
        }
        res.send({message: "competence demandeur deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "competence demandeur not found with id " + req.params.competencedemandeurId
            });                
        }
        return res.status(500).send({
            message: "Could not delete competence demandeur with id " + req.params.competencedemandeurId
        });
    });
};
