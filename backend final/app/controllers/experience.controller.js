const Experience = require('../models/experience.model.js');

// Create and Save a new experience
exports.create = (req, res) => {
    // Validate request
    if(!req.body.NOM_ENT_EXP) {
        return res.status(400).send({
            message: "experience content can not be empty"
        });
    }

    // Create a experience
    const experience = new Experience({
        NOM_ENT_EXP: req.body.NOM_ENT_EXP,
        TYPE_EXP: req.body.TYPE_EXP,
        POSITION_EXP: req.body.POSITION_EXP,
        DESC_EXP: req.body.DESC_EXP,
        OUTIL_EXP: req.body.OUTIL_EXP,
        DAT_DEB_EXP: req.body.DAT_DEB_EXP,
        DAT_FIN_EXP: req.body.DAT_FIN_EXP,
        ID_DEMANDEUR: req.body.ID_DEMANDEUR
    });

    // Save experience in the database
    experience.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the experience."
        });
    });
};

// Retrieve and return all experience from the database.
exports.findAll = (req, res) => {
    Experience.find()
    .then(experiences => {
        res.send(experiences);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving experiences."
        });
    });
};

// Find a single experience with a experienceId
exports.findOne = (req, res) => {
    Experience.findById(req.params.experienceId)
    .then(experience => {
        if(!experience) {
            return res.status(404).send({
                message: "experience not found with id " + req.params.experienceId
            });            
        }
        res.send(experience);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "experience not found with id " + req.params.experienceId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving experience with id " + req.params.experienceId
        });
    });
};

// Update a experience identified by the experienceId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.NOM_ENT_EXP) {
        return res.status(400).send({
            message: "experience content can not be empty"
        });
    }

    // Find experience and update it with the request body
    Experience.findByIdAndUpdate(req.params.experienceId, {
        NOM_ENT_EXP: req.body.NOM_ENT_EXP,
        TYPE_EXP: req.body.TYPE_EXP,
        POSITION_EXP: req.body.POSITION_EXP,
        DESC_EXP: req.body.DESC_EXP,
        OUTIL_EXP: req.body.OUTIL_EXP,
        DAT_DEB_EXP: req.body.DAT_DEB_EXP,
        DAT_FIN_EXP: req.body.DAT_FIN_EXP,
        ID_DEMANDEUR: req.body.ID_DEMANDEUR
    }, {new: true})
    .then(experience => {
        if(!experience) {
            return res.status(404).send({
                message: "experience not found with id " + req.params.experienceId
            });
        }
        res.send(experience);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "experience not found with id " + req.params.experienceId
            });                
        }
        return res.status(500).send({
            message: "Error updating experience with id " + req.params.experienceId
        });
    });
};

// Delete a experience with the specified experienceId in the request
exports.delete = (req, res) => {
    Experience.findByIdAndRemove(req.params.experienceId)
    .then(experience => {
        if(!experience) {
            return res.status(404).send({
                message: "experience not found with id " + req.params.experienceId
            });
        }
        res.send({message: "experience deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "experience not found with id " + req.params.experienceId
            });                
        }
        return res.status(500).send({
            message: "Could not delete experience with id " + req.params.experienceId
        });
    });
};
