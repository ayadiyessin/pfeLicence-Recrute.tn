const Test = require('../models/test.model.js');

// Create and Save a new test
exports.create = (req, res) => {
    // Validate request
    if(!req.body.ID_OFFRE) {
        return res.status(400).send({
            message: "test content can not be empty"
        });
    }

    // Create a test
    const test = new Test({
        ID_OFFRE: req.body.ID_OFFRE
    });

    // Save test in the database
    test.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the test."
        });
    });
};

// Retrieve and return all test from the database.
exports.findAll = (req, res) => {
    Test.find()
    .then(tests => {
        res.send(tests);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving tests."
        });
    });
};

// Find a single test with a testId
exports.findOne = (req, res) => {
    Test.findById(req.params.testId)
    .then(test => {
        if(!test) {
            return res.status(404).send({
                message: "test not found with id " + req.params.testId
            });            
        }
        res.send(test);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "test not found with id " + req.params.testId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving test with id " + req.params.testId
        });
    });
};

// Update a test identified by the testId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.ID_OFFRE) {
        return res.status(400).send({
            message: "test content can not be empty"
        });
    }

    // Find test and update it with the request body
    Test.findByIdAndUpdate(req.params.testId, {
        ID_OFFRE: req.body.ID_OFFRE
    }, {new: true})
    .then(test => {
        if(!test) {
            return res.status(404).send({
                message: "test not found with id " + req.params.testId
            });
        }
        res.send(test);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "test not found with id " + req.params.testId
            });                
        }
        return res.status(500).send({
            message: "Error updating test with id " + req.params.testId
        });
    });
};

// Delete a test with the specified testId in the request
exports.delete = (req, res) => {
    Test.findByIdAndRemove(req.params.testId)
    .then(test => {
        if(!test) {
            return res.status(404).send({
                message: "test not found with id " + req.params.testId
            });
        }
        res.send({message: "test deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "test not found with id " + req.params.testId
            });                
        }
        return res.status(500).send({
            message: "Could not delete test with id " + req.params.testId
        });
    });
};
