const Certification = require('../models/certification.model.js');

// Create and Save a new certification
exports.create = (req, res) => {
    // Validate request
    if(!req.body.NOM_CERT) {
        return res.status(400).send({
            message: "certification content can not be empty"
        });
    }

    // Create a certification
    const certification = new Certification({
        NOM_CERT: req.body.NOM_CERT,
        REF_CERT: req.body.REF_CERT,
        DESC_CERT: req.body.DESC_CERT,
        ID_DEMANDEUR: req.body.ID_DEMANDEUR
    });

    // Save certification in the database
    certification.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the certification."
        });
    });
};

// Retrieve and return all certification from the database.
exports.findAll = (req, res) => {
    Certification.find()
    .then(certifications => {
        res.send(certifications);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving certification."
        });
    });
};

// Find a single certification with a certificationId
exports.findOne = (req, res) => {
    Certification.findById(req.params.certificationId)
    .then(certification => {
        if(!certification) {
            return res.status(404).send({
                message: "certification not found with id " + req.params.certificationId
            });            
        }
        res.send(certification);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "certification not found with id " + req.params.certificationId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving certification with id " + req.params.certificationId
        });
    });
};

// Update a certification identified by the certificationId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.NOM_CERT) {
        return res.status(400).send({
            message: "certification content can not be empty"
        });
    }

    // Find certification and update it with the request body
    Certification.findByIdAndUpdate(req.params.certificationId, {
        NOM_CERT: req.body.NOM_CERT,
        REF_CERT: req.body.REF_CERT,
        DESC_CERT: req.body.DESC_CERT,
        ID_DEMANDEUR: req.body.ID_DEMANDEUR
    }, {new: true})
    .then(certification => {
        if(!certification) {
            return res.status(404).send({
                message: "certification not found with id " + req.params.certificationId
            });
        }
        res.send(certification);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "certification not found with id " + req.params.certificationId
            });                
        }
        return res.status(500).send({
            message: "Error updating certification with id " + req.params.certificationId
        });
    });
};

// Delete a certification with the specified certificationId in the request
exports.delete = (req, res) => {
    Certification.findByIdAndRemove(req.params.certificationId)
    .then(certification => {
        if(!certification) {
            return res.status(404).send({
                message: "certification not found with id " + req.params.certificationId
            });
        }
        res.send({message: "certification deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "certification not found with id " + req.params.certificationId
            });                
        }
        return res.status(500).send({
            message: "Could not delete certification with id " + req.params.certificationId
        });
    });
};
