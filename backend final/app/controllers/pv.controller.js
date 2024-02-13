const Pv = require('../models/pv.model.js');

// Create and Save a new pv
exports.create = (req, res) => {
    // Validate request
    if(!req.body.NOTE_SOFTSK) {
        return res.status(400).send({
            message: "pv content can not be empty"
        });
    }

    // Create a pv
    const pv = new Pv({
        NOTE_SOFTSK: req.body.NOTE_SOFTSK,
        NOTE_HARDSK: req.body.NOTE_HARDSK,
        NOTE_MATRISLANG: req.body.NOTE_MATRISLANG,
        NOTE_PONCTUALITE: req.body.NOTE_PONCTUALITE,
        ETAT_PV: req.body.ETAT_PV,
        MESSAGE_PV: req.body.MESSAGE_PV,
        ID_ENTRETIEN: req.body.ID_ENTRETIEN, 
        ID_DEMANDEUR: req.body.ID_DEMANDEUR 
    });

    // Save pv in the database
    pv.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the pv."
        });
    });
};

// Retrieve and return all pv from the database.
exports.findAll = (req, res) => {
    Pv.find()
    .then(pvs => {
        res.send(pvs);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving pvs."
        });
    });
};

// Find a single pv with a pvId
exports.findOne = (req, res) => {
    Pv.findById(req.params.pvId)
    .then(pv => {
        if(!pv) {
            return res.status(404).send({
                message: "pv not found with id " + req.params.pvId
            });            
        }
        res.send(pv);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "pv not found with id " + req.params.pvId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving pv with id " + req.params.pvId
        });
    });
};

// Update a pv identified by the pvId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.NOTE_SOFTSK) {
        return res.status(400).send({
            message: "pv content can not be empty"
        });
    }

    // Find pv and update it with the request body
    Pv.findByIdAndUpdate(req.params.pvId, {
        NOTE_SOFTSK: req.body.NOTE_SOFTSK,
        NOTE_HARDSK: req.body.NOTE_HARDSK,
        NOTE_MATRISLANG: req.body.NOTE_MATRISLANG,
        NOTE_PONCTUALITE: req.body.NOTE_PONCTUALITE,
        ETAT_PV: req.body.ETAT_PV,
        MESSAGE_PV: req.body.MESSAGE_PV,
        ID_ENTRETIEN: req.body.ID_ENTRETIEN, 
        ID_DEMANDEUR: req.body.ID_DEMANDEUR 
    }, {new: true})
    .then(pv => {
        if(!pv) {
            return res.status(404).send({
                message: "pv not found with id " + req.params.pvId
            });
        }
        res.send(pv);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "pv not found with id " + req.params.pvId
            });                
        }
        return res.status(500).send({
            message: "Error updating pv with id " + req.params.pvId
        });
    });
};

// Delete a pv with the specified pvId in the request
exports.delete = (req, res) => {
    Pv.findByIdAndRemove(req.params.pvId)
    .then(pv => {
        if(!pv) {
            return res.status(404).send({
                message: "pv not found with id " + req.params.pvId
            });
        }
        res.send({message: "pv deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "pv not found with id " + req.params.pvId
            });                
        }
        return res.status(500).send({
            message: "Could not delete pv with id " + req.params.pvId
        });
    });
};
