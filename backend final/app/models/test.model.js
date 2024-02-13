const mongoose = require('mongoose');

const TestSchema = mongoose.Schema({
    ID_OFFRE: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Test', TestSchema);