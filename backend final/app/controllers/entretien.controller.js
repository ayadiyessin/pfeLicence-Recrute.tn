const Entretien = require('../models/entretien.model.js');

// Create and Save a new entretien
exports.create = (req, res) => {
    // Validate request
    if(!req.body.ARCHV_ENTT) {
        return res.status(400).send({
            message: "entretien content can not be empty"
        });
    }

    // Create a entretien
    const entretien = new Entretien({
        ARCHV_ENTT: req.body.ARCHV_ENTT,
        ID_PROPOSERRDV: req.body.ID_PROPOSERRDV
    });

    // Save entretien in the database
    entretien.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the entretien."
        });
    });
};

// Retrieve and return all entretien from the database.
exports.findAll = (req, res) => {
    Entretien.find()
    .then(entretiens => {
        res.send(entretiens);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving entretiens."
        });
    });
};

// Find a single entretien with a entretienId
exports.findOne = (req, res) => {
    Entretien.findById(req.params.entretienId)
    .then(entretien => {
        if(!entretien) {
            return res.status(404).send({
                message: "entretien not found with id " + req.params.entretienId
            });            
        }
        res.send(entretien);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "entretien not found with id " + req.params.entretienId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving entretien with id " + req.params.entretienId
        });
    });
};

// Update a entretien identified by the entretienId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.ARCHV_ENTT) {
        return res.status(400).send({
            message: "entretien content can not be empty"
        });
    }

    // Find entretien and update it with the request body
    Entretien.findByIdAndUpdate(req.params.entretienId, {
        ARCHV_ENTT: req.body.ARCHV_ENTT,
        ID_PROPOSERRDV: req.body.ID_PROPOSERRDV
    }, {new: true})
    .then(entretien => {
        if(!entretien) {
            return res.status(404).send({
                message: "entretien not found with id " + req.params.entretienId
            });
        }
        res.send(entretien);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "entretien not found with id " + req.params.entretienId
            });                
        }
        return res.status(500).send({
            message: "Error updating entretien with id " + req.params.entretienId
        });
    });
};

// Delete a entretien with the specified entretienId in the request
exports.delete = (req, res) => {
    Entretien.findByIdAndRemove(req.params.entretienId)
    .then(entretien => {
        if(!entretien) {
            return res.status(404).send({
                message: "entretien not found with id " + req.params.entretienId
            });
        }
        res.send({message: "entretien deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "entretien not found with id " + req.params.entretienId
            });                
        }
        return res.status(500).send({
            message: "Could not delete entretien with id " + req.params.entretienId
        });
    });
};
