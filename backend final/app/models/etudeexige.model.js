const mongoose = require('mongoose');

const EtudeexigeSchema = mongoose.Schema({
    SPECIA_DEM_OFF: String,
    ID_DIPLOME: String,
    ID_OFFRE: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Etudeexige', EtudeexigeSchema);