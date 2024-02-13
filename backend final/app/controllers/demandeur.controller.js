const Demandeur = require('../models/demandeur.model.js');

// Create and Save a new demandeur
exports.create = (req, res) => {
    // Validate request
    if(!req.body.EMAIL_DEM) {
        return res.status(400).send({
            message: "demandeur content can not be empty"
        });
    }

    // Create a demandeur
    const demandeur = new Demandeur({
        PHOTO_DEM: req.body.PHOTO_DEM,
        EMAIL_DEM:req.body.EMAIL_DEM,
        PSW_DEM: req.body.PSW_DEM,
        NOM_DEM: req.body.NOM_DEM,
        PRE_DEM: req.body.PRE_DEM,
        SEXE_DEM: req.body.SEXE_DEM,
        DAT_NAI_DEM: req.body.DAT_NAI_DEM,
        VILLE_DEM: req.body.VILLE_DEM,
        PAYS_DEM: req.body.PAYS_DEM,
        ADRESSE_DEM: req.body.ADRESSE_DEM,
        NUM_TEL_DEM: req.body.NUM_TEL_DEM,
        COD_POST_DEM: req.body.COD_POST_DEM,
        PERMIS_COND_DEM: req.body.PERMIS_COND_DEM,
        TYPE_PERMIS_DEM: req.body.TYPE_PERMIS_DEM,
        SAL_MIN_DEM: req.body.SAL_MIN_DEM,
        URL_LINK_DEM: req.body.URL_LINK_DEM,
        DESC_DEM: req.body.DESC_DEM,
        SPES_DEM: req.body.SPES_DEM,
        ARCHIV_DEM: req.body.ARCHIV_DEM,
        URL_FB_DEM: req.body.URL_FB_DEM
    });

    // Save demandeur in the database
    demandeur.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the demandeur."
        });
    });
};

// Retrieve and return all demandeur from the database.
exports.findAll = (req, res) => {
    Demandeur.find()
    .then(demandeurs => {
        res.send(demandeurs);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving demandeurs."
        });
    });
};

// Find a single demandeur with a demandeurId
exports.findOne = (req, res) => {
    Demandeur.findById(req.params.demandeurId)
    .then(demandeur => {
        if(!demandeur) {
            return res.status(404).send({
                message: "demandeur not found with id " + req.params.demandeurId
            });            
        }
        res.send(demandeur);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "demandeur not found with id " + req.params.demandeurId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving demandeur with id " + req.params.demandeurId
        });
    });
};

// Update a demandeur identified by the demandeurId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.EMAIL_DEM) {
        return res.status(400).send({
            message: "demandeur content can not be empty"
        });
    }

    // Find demandeur and update it with the request body
    Demandeur.findByIdAndUpdate(req.params.demandeurId, {
        PHOTO_DEM: req.body.PHOTO_DEM,
        EMAIL_DEM:req.body.EMAIL_DEM,
        PSW_DEM: req.body.PSW_DEM,
        NOM_DEM: req.body.NOM_DEM,
        PRE_DEM: req.body.PRE_DEM,
        SEXE_DEM: req.body.SEXE_DEM,
        DAT_NAI_DEM: req.body.DAT_NAI_DEM,
        VILLE_DEM: req.body.VILLE_DEM,
        PAYS_DEM: req.body.PAYS_DEM,
        ADRESSE_DEM: req.body.ADRESSE_DEM,
        NUM_TEL_DEM: req.body.NUM_TEL_DEM,
        COD_POST_DEM: req.body.COD_POST_DEM,
        PERMIS_COND_DEM: req.body.PERMIS_COND_DEM,
        TYPE_PERMIS_DEM: req.body.TYPE_PERMIS_DEM,
        SAL_MIN_DEM: req.body.SAL_MIN_DEM,
        URL_LINK_DEM: req.body.URL_LINK_DEM,
        DESC_DEM: req.body.DESC_DEM,
        SPES_DEM: req.body.SPES_DEM,
        ARCHIV_DEM: req.body.ARCHIV_DEM,
        URL_FB_DEM: req.body.URL_FB_DEM
    }, {new: true})
    .then(demandeur => {
        if(!demandeur) {
            return res.status(404).send({
                message: "demandeur not found with id " + req.params.demandeurId
            });
        }
        res.send(demandeur);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "demandeur not found with id " + req.params.demandeurId
            });                
        }
        return res.status(500).send({
            message: "Error updating demandeur with id " + req.params.demandeurId
        });
    });
};

// Delete a demandeur with the specified demandeurId in the request
exports.delete = (req, res) => {
    Demandeur.findByIdAndRemove(req.params.demandeurId)
    .then(demandeur => {
        if(!demandeur) {
            return res.status(404).send({
                message: "demandeur not found with id " + req.params.demandeurId
            });
        }
        res.send({message: "demandeur deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "demandeur not found with id " + req.params.demandeurId
            });                
        }
        return res.status(500).send({
            message: "Could not delete demandeur with id " + req.params.demandeurId
        });
    });
};
