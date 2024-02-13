const Competenceoffre = require('../models/competenceoffre.model.js');

// Create and Save a new competenceoffre
exports.create = (req, res) => {
    // Validate request
    if(!req.body.NIV_COMP_OFF) {
        return res.status(400).send({
            message: "competence offre content can not be empty"
        });
    }

    // Create a competenceoffre
    const competenceoffre = new Competenceoffre({
        NIV_COMP_OFF: req.body.NIV_COMP_OFF,
        ID_COMPETENCE: req.body.ID_COMPETENCE,
        ID_OFFRE: req.body.ID_OFFRE
    });

    // Save competenceoffre in the database
    competenceoffre.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the competence offre."
        });
    });
};

// Retrieve and return all competenceoffre from the database.
exports.findAll = (req, res) => {
    Competenceoffre.find()
    .then(competenceoffres => {
        res.send(competenceoffres);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving ccompetence offres."
        });
    });
};

// Find a single competenceoffre with a competenceoffreId
exports.findOne = (req, res) => {
    Competenceoffre.findById(req.params.competenceoffreId)
    .then(competenceoffre => {
        if(!competenceoffre) {
            return res.status(404).send({
                message: "competence offre not found with id " + req.params.competenceoffreId
            });            
        }
        res.send(competenceoffre);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "competence offre not found with id " + req.params.competenceoffreId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving competence offre with id " + req.params.competenceoffreId
        });
    });
};

// Update a competenceoffre identified by the competenceoffreId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.NIV_COMP_OFF) {
        return res.status(400).send({
            message: "competence offre content can not be empty"
        });
    }

    // Find competenceoffre and update it with the request body
    Competenceoffre.findByIdAndUpdate(req.params.competenceoffreId, {
        NIV_COMP_OFF: req.body.NIV_COMP_OFF,
        ID_COMPETENCE: req.body.ID_COMPETENCE,
        ID_OFFRE: req.body.ID_OFFRE
    }, {new: true})
    .then(competenceoffre => {
        if(!competenceoffre) {
            return res.status(404).send({
                message: "competence offre not found with id " + req.params.competenceoffreId
            });
        }
        res.send(competenceoffre);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "competence offre not found with id " + req.params.competenceoffreId
            });                
        }
        return res.status(500).send({
            message: "Error updating competence offre with id " + req.params.competenceoffreId
        });
    });
};

// Delete a competenceoffre with the specified competenceoffreId in the request
exports.delete = (req, res) => {
    Competenceoffre.findByIdAndRemove(req.params.competenceoffreId)
    .then(competenceoffre => {
        if(!competenceoffre) {
            return res.status(404).send({
                message: "competence offre not found with id " + req.params.competenceoffreId
            });
        }
        res.send({message: "competence offre deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "competence offre not found with id " + req.params.competenceoffreId
            });                
        }
        return res.status(500).send({
            message: "Could not delete competence offre with id " + req.params.competenceoffreId
        });
    });
};
