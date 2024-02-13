const Etudeexige = require('../models/etudeexige.model.js');

// Create and Save a new etudeexige
exports.create = (req, res) => {
    // Validate request
    if(!req.body.SPECIA_DEM_OFF) {
        return res.status(400).send({
            message: "etude exige content can not be empty"
        });
    }

    // Create a etudeexige
    const etudeexige = new Etudeexige({
        SPECIA_DEM_OFF: req.body.SPECIA_DEM_OFF,
        ID_DIPLOME: req.body.ID_DIPLOME,
        ID_OFFRE: req.body.ID_OFFRE
    });

    // Save etudeexige in the database
    etudeexige.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the etude exige."
        });
    });
};

// Retrieve and return all etudeexige from the database.
exports.findAll = (req, res) => {
    Etudeexige.find()
    .then(etudeexiges => {
        res.send(etudeexiges);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving etude exiges."
        });
    });
};

// Find a single etudeexige with a etudeexigeId
exports.findOne = (req, res) => {
    Etudeexige.findById(req.params.etudeexigeId)
    .then(etudeexige => {
        if(!etudeexige) {
            return res.status(404).send({
                message: "etude exige not found with id " + req.params.etudeexigeId
            });            
        }
        res.send(etudeexige);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "etude exige not found with id " + req.params.etudeexigeId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving etude exige with id " + req.params.etudeexigeId
        });
    });
};

// Update a etudeexige identified by the etudeexigeId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.SPECIA_DEM_OFF) {
        return res.status(400).send({
            message: "etude exige content can not be empty"
        });
    }

    // Find etudeexige and update it with the request body
    Etudeexige.findByIdAndUpdate(req.params.etudeexigeId, {
        SPECIA_DEM_OFF: req.body.SPECIA_DEM_OFF,
        ID_DIPLOME: req.body.ID_DIPLOME,
        ID_OFFRE: req.body.ID_OFFRE
    }, {new: true})
    .then(etudeexige => {
        if(!etudeexige) {
            return res.status(404).send({
                message: "etude exige not found with id " + req.params.etudeexigeId
            });
        }
        res.send(etudeexige);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "etude exige not found with id " + req.params.etudeexigeId
            });                
        }
        return res.status(500).send({
            message: "Error updating etude exige with id " + req.params.etudeexigeId
        });
    });
};

// Delete a etudeexige with the specified etudeexigeId in the request
exports.delete = (req, res) => {
    Etudeexige.findByIdAndRemove(req.params.etudeexigeId)
    .then(etudeexige => {
        if(!etudeexige) {
            return res.status(404).send({
                message: "etude exige not found with id " + req.params.etudeexigeId
            });
        }
        res.send({message: "etude exige deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "etude exige not found with id " + req.params.etudeexigeId
            });                
        }
        return res.status(500).send({
            message: "Could not delete etude exige with id " + req.params.etudeexigeId
        });
    });
};
