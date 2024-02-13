const mongoose = require('mongoose');

const EntretienSchema = mongoose.Schema({
    ARCHV_ENTT: String,
    ID_PROPOSERRDV: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Entretien', EntretienSchema);