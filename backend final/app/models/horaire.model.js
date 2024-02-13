const mongoose = require('mongoose');

const HoraireSchema = mongoose.Schema({
    JOUR_TRAV: String,
    TIME_DEB_MATIN: String,
    TIME_FIN_MATIN: String,
    TIME_DEB_MIDI: String,
    TIME_FIN_MIDI: String,
    ID_RECRUTEUR: String
},{
    timestamps: true
});

module.exports = mongoose.model('Horaire', HoraireSchema);