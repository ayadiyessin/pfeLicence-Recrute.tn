const Centresinteret = require('../models/centresinteret.model.js');

// Create and Save a new centresinteret
exports.create = (req, res) => {
    // Validate request
    if(!req.body.NOM_CI) {
        return res.status(400).send({
            message: "centres interet content can not be empty"
        });
    }

    // Create a centresinteret
    const centresinteret = new Centresinteret({
        NOM_CI: req.body.NOM_CI,
        ID_DEMANDEUR: req.body.ID_DEMANDEUR
    });

    // Save centresinteret in the database
    centresinteret.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the centres interet."
        });
    });
};

// Retrieve and return all centresinteret from the database.
exports.findAll = (req, res) => {
    Centresinteret.find()
    .then(centresinterets => {
        res.send(centresinterets);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving centres interets."
        });
    });
};

// Find a single centresinteret with a centresinteretId
exports.findOne = (req, res) => {
    Centresinteret.findById(req.params.centresinteretId)
    .then(centresinteret => {
        if(!centresinteret) {
            return res.status(404).send({
                message: "centresinteret not found with id " + req.params.centresinteretId
            });            
        }
        res.send(centresinteret);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "centresinteret not found with id " + req.params.centresinteretId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving centresinteret with id " + req.params.centresinteretId
        });
    });
};

// Update a centresinteret identified by the centresinteretId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.NOM_CI) {
        return res.status(400).send({
            message: "centresinteret content can not be empty"
        });
    }

    // Find centresinteret and update it with the request body
    Centresinteret.findByIdAndUpdate(req.params.centresinteretId, {
        NOM_CI: req.body.NOM_CI,
        ID_DEMANDEUR: req.body.ID_DEMANDEUR
    }, {new: true})
    .then(centresinteret => {
        if(!centresinteret) {
            return res.status(404).send({
                message: "centresinteret not found with id " + req.params.centresinteretId
            });
        }
        res.send(centresinteret);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "centresinteret not found with id " + req.params.centresinteretId
            });                
        }
        return res.status(500).send({
            message: "Error updating centresinteret with id " + req.params.centresinteretId
        });
    });
};

// Delete a centresinteret with the specified centresinteretId in the request
exports.delete = (req, res) => {
    Centresinteret.findByIdAndRemove(req.params.centresinteretId)
    .then(centresinteret => {
        if(!centresinteret) {
            return res.status(404).send({
                message: "centresinteret not found with id " + req.params.centresinteretId
            });
        }
        res.send({message: "centresinteret deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "centresinteret not found with id " + req.params.centresinteretId
            });                
        }
        return res.status(500).send({
            message: "Could not delete centresinteret with id " + req.params.centresinteretId
        });
    });
};
