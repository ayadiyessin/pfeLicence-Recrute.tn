const Vieassociative = require('../models/vieassociative.model.js');

// Create and Save a new vieassociative
exports.create = (req, res) => {
    // Validate request
    if(!req.body.NOM_VA) {
        return res.status(400).send({
            message: "vie associative content can not be empty"
        });
    }

    // Create a vieassociative
    const vieassociative = new Vieassociative({
        NOM_VA: req.body.NOM_VA,
        POSITION_VA: req.body.POSITION_VA,
        DAT_DEB_VA: req.body.DAT_DEB_VA,
        DAT_FIN_VA: req.body.DAT_FIN_VA,
        ID_DEMANDEUR: req.body.ID_DEMANDEUR
    });

    // Save vieassociative in the database
    vieassociative.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the vie associative."
        });
    });
};

// Retrieve and return all vieassociative from the database.
exports.findAll = (req, res) => {
    Vieassociative.find()
    .then(vieassociatives => {
        res.send(vieassociatives);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving vie associatives."
        });
    });
};

// Find a single vieassociative with a vieassociativeId
exports.findOne = (req, res) => {
    Vieassociative.findById(req.params.vieassociativeId)
    .then(vieassociative => {
        if(!vieassociative) {
            return res.status(404).send({
                message: "vie associative not found with id " + req.params.vieassociativeId
            });            
        }
        res.send(vieassociative);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "vie associative not found with id " + req.params.vieassociativeId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving vie associative with id " + req.params.vieassociativeId
        });
    });
};

// Update a vieassociative identified by the vieassociativeId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.NOM_VA) {
        return res.status(400).send({
            message: "vie associative content can not be empty"
        });
    }

    // Find vieassociative and update it with the request body
    Vieassociative.findByIdAndUpdate(req.params.vieassociativeId, {
        NOM_VA: req.body.NOM_VA,
        POSITION_VA: req.body.POSITION_VA,
        DAT_DEB_VA: req.body.DAT_DEB_VA,
        DAT_FIN_VA: req.body.DAT_FIN_VA,
        ID_DEMANDEUR: req.body.ID_DEMANDEUR
    }, {new: true})
    .then(vieassociative => {
        if(!vieassociative) {
            return res.status(404).send({
                message: "vie associative not found with id " + req.params.vieassociativeId
            });
        }
        res.send(vieassociative);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "vie associative not found with id " + req.params.vieassociativeId
            });                
        }
        return res.status(500).send({
            message: "Error updating vie associative with id " + req.params.vieassociativeId
        });
    });
};

// Delete a vieassociative with the specified vieassociativeId in the request
exports.delete = (req, res) => {
    Vieassociative.findByIdAndRemove(req.params.vieassociativeId)
    .then(vieassociative => {
        if(!vieassociative) {
            return res.status(404).send({
                message: "vie associative not found with id " + req.params.vieassociativeId
            });
        }
        res.send({message: "vie associative deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "vie associative not found with id " + req.params.vieassociativeId
            });                
        }
        return res.status(500).send({
            message: "Could not delete vie associative with id " + req.params.vieassociativeId
        });
    });
};
