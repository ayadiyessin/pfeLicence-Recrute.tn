const Commentaire = require('../models/commentaire.model.js');

// Create and Save a new commentaire
exports.create = (req, res) => {
    // Validate request
    if(!req.body.DESC_COM) {
        return res.status(400).send({
            message: "commentaire content can not be empty"
        });
    }

    // Create a commentaire
    const commentaire = new Commentaire({
        DESC_COM: req.body.DESC_COM,
        ID_OFFRE: req.body.ID_OFFRE,
        ID_DEMANDEUR: req.body.ID_DEMANDEUR,
        ID_RECRUTEUR: req.body.ID_RECRUTEUR
    });

    // Save commentaire in the database
    commentaire.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the commentaire."
        });
    });
};

// Retrieve and return all commentaire from the database.
exports.findAll = (req, res) => {
    Commentaire.find()
    .then(commentaires => {
        res.send(commentaires);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving commentaires."
        });
    });
};

// Find a single commentaire with a commentaireId
exports.findOne = (req, res) => {
    Commentaire.findById(req.params.commentaireId)
    .then(commentaire => {
        if(!commentaire) {
            return res.status(404).send({
                message: "commentaire not found with id " + req.params.commentaireId
            });            
        }
        res.send(commentaire);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "commentaire not found with id " + req.params.commentaireId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving commentaire with id " + req.params.commentaireId
        });
    });
};

// Update a commentaire identified by the commentaireId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.DESC_COM) {
        return res.status(400).send({
            message: "commentaire content can not be empty"
        });
    }

    // Find commentaire and update it with the request body
    Commentaire.findByIdAndUpdate(req.params.commentaireId, {
        DESC_COM: req.body.DESC_COM,
        ID_OFFRE: req.body.ID_OFFRE,
        ID_DEMANDEUR: req.body.ID_DEMANDEUR,
        ID_RECRUTEUR: req.body.ID_RECRUTEUR
    }, {new: true})
    .then(commentaire => {
        if(!commentaire) {
            return res.status(404).send({
                message: "commentaire not found with id " + req.params.commentaireId
            });
        }
        res.send(commentaire);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "commentaire not found with id " + req.params.commentaireId
            });                
        }
        return res.status(500).send({
            message: "Error updating commentaire with id " + req.params.commentaireId
        });
    });
};

// Delete a commentaire with the specified commentaireId in the request
exports.delete = (req, res) => {
    Commentaire.findByIdAndRemove(req.params.commentaireId)
    .then(commentaire => {
        if(!commentaire) {
            return res.status(404).send({
                message: "commentaire not found with id " + req.params.commentaireId
            });
        }
        res.send({message: "commentaire deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "commentaire not found with id " + req.params.commentaireId
            });                
        }
        return res.status(500).send({
            message: "Could not delete commentaire with id " + req.params.commentaireId
        });
    });
};
