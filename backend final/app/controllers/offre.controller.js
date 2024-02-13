const Offre = require('../models/offre.model.js');

// Create and Save a new offre
exports.create = (req, res) => {
    // Validate request
    if(!req.body.NOM_OFF) {
        return res.status(400).send({
            message: "offre content can not be empty"
        });
    }

    // Create a offre
    const offre = new Offre({
        NOM_OFF: req.body.NOM_OFF,
        PHOTO_OFF: req.body.PHOTO_OFF,
        SEXE_CAND_OFF: req.body.SEXE_CAND_OFF,
        DESC_OFF: req.body.DESC_OFF,
        MISSION_OFF: req.body.MISSION_OFF,
        SAL_MIN_OFF: req.body.SAL_MIN_OFF,
        NOM_AVG_OFF: req.body.NOM_AVG_OFF,
        NOM_MC_OFF: req.body.NOM_MC_OFF,
        NOM_TE_OFF: req.body.NOM_TE_OFF,
        ARCHV_OFF: req.body.ARCHV_OFF,
        DAT_EXPIRA_OFF: req.body.DAT_EXPIRA_OFF,
        ID_RECRUTEUR: req.body.ID_RECRUTEUR  
    });

    // Save offre in the database
    offre.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the offre."
        });
    });
};

// Retrieve and return all offre from the database.
exports.findAll = (req, res) => {
    Offre.find()
    .then(offres => {
        res.send(offres);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving offres."
        });
    });
};

// Find a single offre with a offreId
exports.findOne = (req, res) => {
    Offre.findById(req.params.offreId)
    .then(offre => {
        if(!offre) {
            return res.status(404).send({
                message: "offre not found with id " + req.params.offreId
            });            
        }
        res.send(offre);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "offre not found with id " + req.params.offreId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving offre with id " + req.params.offreId
        });
    });
};

// Update a offre identified by the offreId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.NOM_OFF) {
        return res.status(400).send({
            message: "offre content can not be empty"
        });
    }

    // Find offre and update it with the request body
    Offre.findByIdAndUpdate(req.params.offreId, {
        NOM_OFF: req.body.NOM_OFF,
        PHOTO_OFF: req.body.PHOTO_OFF,
        SEXE_CAND_OFF: req.body.SEXE_CAND_OFF,
        DESC_OFF: req.body.DESC_OFF,
        MISSION_OFF: req.body.MISSION_OFF,
        SAL_MIN_OFF: req.body.SAL_MIN_OFF,
        NOM_AVG_OFF: req.body.NOM_AVG_OFF,
        NOM_MC_OFF: req.body.NOM_MC_OFF,
        NOM_TE_OFF: req.body.NOM_TE_OFF,
        ARCHV_OFF: req.body.ARCHV_OFF,
        DAT_EXPIRA_OFF: req.body.DAT_EXPIRA_OFF,
        ID_RECRUTEUR: req.body.ID_RECRUTEUR
    }, {new: true})
    .then(offre => {
        if(!offre) {
            return res.status(404).send({
                message: "offre not found with id " + req.params.offreId
            });
        }
        res.send(offre);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "offre not found with id " + req.params.offreId
            });                
        }
        return res.status(500).send({
            message: "Error updating offre with id " + req.params.offreId
        });
    });
};

// Delete a offre with the specified offreId in the request
exports.delete = (req, res) => {
    Offre.findByIdAndRemove(req.params.offreId)
    .then(offre => {
        if(!offre) {
            return res.status(404).send({
                message: "offre not found with id " + req.params.offreId
            });
        }
        res.send({message: "offre deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "offre not found with id " + req.params.offreId
            });                
        }
        return res.status(500).send({
            message: "Could not delete offre with id " + req.params.offreId
        });
    });
};
