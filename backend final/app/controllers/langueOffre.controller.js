const LangueOffre = require('../models/langueOffre.model.js');

// Create and Save a new langueOffre
exports.create = (req, res) => {
    // Validate request
    if(!req.body.NIV_LANG_OFF) {
        return res.status(400).send({
            message: "langueOffre content can not be empty"
        });
    }

    // Create a langueOffre
    const langueOffre = new LangueOffre({
        NIV_LANG_OFF:  req.body.NIV_LANG_OFF,
        ID_OFFRE:  req.body.ID_OFFRE,
        ID_LANGUE: req.body.ID_LANGUE

    });

    // Save langueOffre in the database
    langueOffre.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the langueOffre."
        });
    });
};

// Retrieve and return all langueOffre from the database.
exports.findAll = (req, res) => {
    LangueOffre.find()
    .then(langueOffres => {
        res.send(langueOffres);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving langueOffres."
        });
    });
};

// Find a single langueOffre with a langueOffreId
exports.findOne = (req, res) => {
    LangueOffre.findById(req.params.langueOffreId)
    .then(langueOffre => {
        if(!langueOffre) {
            return res.status(404).send({
                message: "langueOffre not found with id " + req.params.langueOffreId
            });            
        }
        res.send(langueOffre);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "langueOffre not found with id " + req.params.langueOffreId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving langueOffre with id " + req.params.langueOffreId
        });
    });
};

// Update a langueOffre identified by the langueOffreId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.NIV_LANG_OFF) {
        return res.status(400).send({
            message: "langueOffre content can not be empty"
        });
    }

    // Find langueOffre and update it with the request body
    LangueOffre.findByIdAndUpdate(req.params.langueOffreId, {
        NIV_LANG_OFF:  req.body.NIV_LANG_OFF,
        ID_OFFRE:  req.body.ID_OFFRE,
        ID_LANGUE: req.body.ID_LANGUE
    }, {new: true})
    .then(langueOffre => {
        if(!langueOffre) {
            return res.status(404).send({
                message: "langueOffre not found with id " + req.params.langueOffreId
            });
        }
        res.send(langueOffre);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "langueOffre not found with id " + req.params.langueOffreId
            });                
        }
        return res.status(500).send({
            message: "Error updating langueOffre with id " + req.params.langueOffreId
        });
    });
};

// Delete a langueOffre with the specified langueOffreId in the request
exports.delete = (req, res) => {
    LangueOffre.findByIdAndRemove(req.params.langueOffreId)
    .then(langueOffre => {
        if(!langueOffre) {
            return res.status(404).send({
                message: "langueOffre not found with id " + req.params.langueOffreId
            });
        }
        res.send({message: "langueOffre deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "langueOffre not found with id " + req.params.langueOffreId
            });                
        }
        return res.status(500).send({
            message: "Could not delete langueOffre with id " + req.params.langueOffreId
        });
    });
};
