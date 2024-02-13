const Recruteur = require('../models/recruteur.model.js');

// Create and Save a new recruteur
exports.create = (req, res) => {
    // Validate request
    if(!req.body.EMAIL_REC) {
        return res.status(400).send({
            message: "recruteur content can not be empty"
        });
    }

    // Create a recruteur
    const recruteur = new Recruteur({
        EMAIL_REC:req.body.EMAIL_REC,
        PSW_REC:  req.body.PSW_REC,
        SEC_DACT_ENT:  req.body.SEC_DACT_ENT,
        EMAIL_ENT: req.body.EMAIL_ENT,
        IDENT_UNQ_ENT: req.body.IDENT_UNQ_ENT,
        NOM_ENT: req.body.NOM_ENT,
        LOGO_ENT: req.body.LOGO_ENT,
        URL_WEB_ENT: req.body.URL_WEB_ENT,
        URL_LINK_ENT: req.body.URL_LINK_ENT,
        URL_FB_ENT: req.body.URL_FB_ENT,
        DESC_ENT: req.body.DESC_ENT,
        PAYS_ORG_ENT: req.body.PAYS_ORG_ENT,
        VILLE_ENT: req.body.VILLE_ENT,
        ADRESSE_ENT: req.body.ADRESSE_ENT,
        COD_POST_ENT: req.body.COD_POST_ENT,
        NUM_TEL_ENT: req.body.NUM_TEL_ENT,
        NB_SAL_ENT: req.body.NB_SAL_ENT,
        VALID_ENT: req.body.VALID_ENT,
        X: req.body.X,
        Y: req.body.Y,
        ARCHIV_REC: req.body.ARCHIV_REC,
        DAT_CREA_ENT: req.body.DAT_CREA_ENT
    });

    // Save recruteur in the database
    recruteur.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the recruteur."
        });
    });
};

// Retrieve and return all recruteur from the database.
exports.findAll = (req, res) => {
    Recruteur.find()
    .then(recruteurs => {
        res.send(recruteurs);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving recruteurs."
        });
    });
};

// Find a single recruteur with a recruteurId
exports.findOne = (req, res) => {
    Recruteur.findById(req.params.recruteurId)
    .then(recruteur => {
        if(!recruteur) {
            return res.status(404).send({
                message: "recruteur not found with id " + req.params.recruteurId
            });            
        }
        res.send(recruteur);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "recruteur not found with id " + req.params.recruteurId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving recruteur with id " + req.params.recruteurId
        });
    });
};

// Update a recruteur identified by the recruteurId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.EMAIL_REC) {
        return res.status(400).send({
            message: "recruteur content can not be empty"
        });
    }

    // Find recruteur and update it with the request body
    Recruteur.findByIdAndUpdate(req.params.recruteurId, {
        EMAIL_REC:req.body.EMAIL_REC,
        PSW_REC:  req.body.PSW_REC,
        SEC_DACT_ENT:  req.body.SEC_DACT_ENT,
        EMAIL_ENT: req.body.EMAIL_ENT,
        IDENT_UNQ_ENT: req.body.IDENT_UNQ_ENT,
        NOM_ENT: req.body.NOM_ENT,
        LOGO_ENT: req.body.LOGO_ENT,
        URL_WEB_ENT: req.body.URL_WEB_ENT,
        URL_LINK_ENT: req.body.URL_LINK_ENT,
        URL_FB_ENT: req.body.URL_FB_ENT,
        DESC_ENT: req.body.DESC_ENT,
        PAYS_ORG_ENT: req.body.PAYS_ORG_ENT,
        VILLE_ENT: req.body.VILLE_ENT,
        ADRESSE_ENT: req.body.ADRESSE_ENT,
        COD_POST_ENT: req.body.COD_POST_ENT,
        NUM_TEL_ENT: req.body.NUM_TEL_ENT,
        NB_SAL_ENT: req.body.NB_SAL_ENT,
        VALID_ENT: req.body.VALID_ENT,
        X: req.body.X,
        Y: req.body.Y,
        ARCHIV_REC: req.body.ARCHIV_REC,
        DAT_CREA_ENT: req.body.DAT_CREA_ENT
    }, {new: true})
    .then(recruteur => {
        if(!recruteur) {
            return res.status(404).send({
                message: "recruteur not found with id " + req.params.recruteurId
            });
        }
        res.send(recruteur);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "recruteur not found with id " + req.params.recruteurId
            });                
        }
        return res.status(500).send({
            message: "Error updating recruteur with id " + req.params.recruteurId
        });
    });
};

// Delete a recruteur with the specified recruteurId in the request
exports.delete = (req, res) => {
    Recruteur.findByIdAndRemove(req.params.recruteurId)
    .then(recruteur => {
        if(!recruteur) {
            return res.status(404).send({
                message: "recruteur not found with id " + req.params.recruteurId
            });
        }
        res.send({message: "recruteur deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "recruteur not found with id " + req.params.recruteurId
            });                
        }
        return res.status(500).send({
            message: "Could not delete recruteur with id " + req.params.recruteurId
        });
    });
};
