const mongoose = require('mongoose');

const DiplomedemandeurSchema = mongoose.Schema({
    NOM_ECOL_DIP: String,
    SPECIA_DIP: String,
    DAT_DEB_DIP: String,
    DAT_FIN_DIP: String,
    ID_DIPLOME: String,
    ID_DEMANDEUR: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Diplomedemandeur', DiplomedemandeurSchema);