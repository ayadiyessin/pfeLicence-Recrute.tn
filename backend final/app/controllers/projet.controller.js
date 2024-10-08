const Projet = require('../models/projet.model.js');

// Create and Save a new projet
exports.create = (req, res) => {
    // Validate request
    if(!req.body.NOM_PROJ) {
        return res.status(400).send({
            message: "projet content can not be empty"
        });
    }

    // Create a projet
    const projet = new Projet({
        NOM_PROJ: req.body.NOM_PROJ,
        TYPE_PROJ: req.body.TYPE_PROJ,
        DAT_DEB_PROJ: req.body.DAT_DEB_PROJ,
        DAT_FIN_PROJ: req.body.DAT_FIN_PROJ,
        DESC_PROJ: req.body.DESC_PROJ,
        OUTIL_PROJ: req.body.OUTIL_PROJ,
        ID_DEMANDEUR: req.body.ID_DEMANDEUR
    });

    // Save projet in the database
    projet.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the projet."
        });
    });
};

// Retrieve and return all projet from the database.
exports.findAll = (req, res) => {
    Projet.find()
    .then(projets => {
        res.send(projets);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving projets."
        });
    });
};

// Find a single projet with a projetId
exports.findOne = (req, res) => {
    Projet.findById(req.params.projetId)
    .then(projet => {
        if(!projet) {
            return res.status(404).send({
                message: "projet not found with id " + req.params.projetId
            });            
        }
        res.send(projet);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "projet not found with id " + req.params.projetId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving projet with id " + req.params.projetId
        });
    });
};

// Update a projet identified by the projetId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.NOM_PROJ) {
        return res.status(400).send({
            message: "projet content can not be empty"
        });
    }

    // Find projet and update it with the request body
    Projet.findByIdAndUpdate(req.params.projetId, {
        NOM_PROJ: req.body.NOM_PROJ,
        TYPE_PROJ: req.body.TYPE_PROJ,
        DAT_DEB_PROJ: req.body.DAT_DEB_PROJ,
        DAT_FIN_PROJ: req.body.DAT_FIN_PROJ,
        DESC_PROJ: req.body.DESC_PROJ,
        OUTIL_PROJ: req.body.OUTIL_PROJ,
        ID_DEMANDEUR: req.body.ID_DEMANDEUR
    }, {new: true})
    .then(projet => {
        if(!projet) {
            return res.status(404).send({
                message: "projet not found with id " + req.params.projetId
            });
        }
        res.send(projet);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "projet not found with id " + req.params.projetId
            });                
        }
        return res.status(500).send({
            message: "Error updating projet with id " + req.params.projetId
        });
    });
};

// Delete a projet with the specified projetId in the request
exports.delete = (req, res) => {
    Projet.findByIdAndRemove(req.params.projetId)
    .then(projet => {
        if(!projet) {
            return res.status(404).send({
                message: "projet not found with id " + req.params.projetId
            });
        }
        res.send({message: "projet deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "projet not found with id " + req.params.projetId
            });                
        }
        return res.status(500).send({
            message: "Could not delete projet with id " + req.params.projetId
        });
    });
};
