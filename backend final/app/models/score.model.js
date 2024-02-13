const mongoose = require('mongoose');

const ScoreSchema = mongoose.Schema({
    SCORE: String,
    ID_DEMANDEUR: String,
    ID_TEST: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Score', ScoreSchema);