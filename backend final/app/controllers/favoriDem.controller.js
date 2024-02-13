const FavoriDem = require('../models/favoriDem.model.js');

// Create and Save a new FavoriDem
exports.create = (req, res) => {
    // Validate request
    if(!req.body.FAVORI_DEM) {
        return res.status(400).send({
            message: "favoriDem content can not be empty"
        });
    }

    // Create a favoriDem
    const favoriDem = new FavoriDem({
        FAVORI_DEM: req.body.FAVORI_DEM,
        ID_RECRUTEUR: req.body.ID_RECRUTEUR,
        ID_DEMANDEUR: req.body.ID_DEMANDEUR
    });

    // Save favoriDem in the database
    favoriDem.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the favoriDem."
        });
    });
};

// Retrieve and return all favoriDem from the database.
exports.findAll = (req, res) => {
    FavoriDem.find()
    .then(favoriDems => {
        res.send(favoriDems);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving favoriDems."
        });
    });
};

// Find a single favoriDem with a favoriDemId
exports.findOne = (req, res) => {
    FavoriDem.findById(req.params.favoriDemId)
    .then(favoriDem => {
        if(!favoriDem) {
            return res.status(404).send({
                message: "favoriDem not found with id " + req.params.favoriDemId
            });            
        }
        res.send(favoriDem);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "favoriDem not found with id " + req.params.favoriDemId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving favoriDem with id " + req.params.favoriDemId
        });
    });
};

// Update a favoriDem identified by the favoriDemId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.FAVORI_DEM) {
        return res.status(400).send({
            message: "favoriDem content can not be empty"
        });
    }

    // Find favoriDem and update it with the request body
    FavoriDem.findByIdAndUpdate(req.params.favoriDemId, {
        FAVORI_DEM: req.body.FAVORI_DEM,
        ID_RECRUTEUR: req.body.ID_RECRUTEUR,
        ID_DEMANDEUR: req.body.ID_DEMANDEUR
    }, {new: true})
    .then(favoriDem => {
        if(!favoriDem) {
            return res.status(404).send({
                message: "favoriDem not found with id " + req.params.favoriDemId
            });
        }
        res.send(favoriDem);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "favoriDem not found with id " + req.params.favoriDemId
            });                
        }
        return res.status(500).send({
            message: "Error updating favoriDem with id " + req.params.favoriDemId
        });
    });
};

// Delete a favoriDem with the specified favoriDemId in the request
exports.delete = (req, res) => {
    FavoriDem.findByIdAndRemove(req.params.favoriDemId)
    .then(favoriDem => {
        if(!favoriDem) {
            return res.status(404).send({
                message: "favoriDem not found with id " + req.params.favoriDemId
            });
        }
        res.send({message: "favoriDem deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "favoriDem not found with id " + req.params.favoriDemId
            });                
        }
        return res.status(500).send({
            message: "Could not delete favoriDem with id " + req.params.favoriDemId
        });
    });
};
