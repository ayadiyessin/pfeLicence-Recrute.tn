const Message = require('../models/message.model.js');

// Create and Save a new message
exports.create = (req, res) => {
    // Validate request
    if(!req.body.DESC_MES) {
        return res.status(400).send({
            message: "message content can not be empty"
        });
    }

    // Create a message
    const message = new Message({
        DESC_MES: req.body.DESC_MES,
        ID_RECRUTEUR: req.body.ID_RECRUTEUR,
        ID_DEMANDEUR: req.body.ID_DEMANDEUR
    });

    // Save message in the database
    message.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the message."
        });
    });
};

// Retrieve and return all message from the database.
exports.findAll = (req, res) => {
    Message.find()
    .then(messages => {
        res.send(messages);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving messages."
        });
    });
};

// Find a single message with a messageId
exports.findOne = (req, res) => {
    Message.findById(req.params.messageId)
    .then(message => {
        if(!message) {
            return res.status(404).send({
                message: "message not found with id " + req.params.messageId
            });            
        }
        res.send(message);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "message not found with id " + req.params.messageId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving message with id " + req.params.messageId
        });
    });
};

// Update a message identified by the messageId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.DESC_MES) {
        return res.status(400).send({
            message: "message content can not be empty"
        });
    }

    // Find message and update it with the request body
    Message.findByIdAndUpdate(req.params.messageId, {
        DESC_MES: req.body.DESC_MES,
        ID_RECRUTEUR: req.body.ID_RECRUTEUR,
        ID_DEMANDEUR: req.body.ID_DEMANDEUR
    }, {new: true})
    .then(message => {
        if(!message) {
            return res.status(404).send({
                message: "message not found with id " + req.params.messageId
            });
        }
        res.send(message);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "message not found with id " + req.params.messageId
            });                
        }
        return res.status(500).send({
            message: "Error updating message with id " + req.params.messageId
        });
    });
};

// Delete a message with the specified messageId in the request
exports.delete = (req, res) => {
    Message.findByIdAndRemove(req.params.messageId)
    .then(message => {
        if(!message) {
            return res.status(404).send({
                message: "message not found with id " + req.params.messageId
            });
        }
        res.send({message: "message deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "message not found with id " + req.params.messageId
            });                
        }
        return res.status(500).send({
            message: "Could not delete message with id " + req.params.messageId
        });
    });
};
