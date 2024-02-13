const mongoose = require('mongoose');

const FormationSchema = mongoose.Schema({
    NOM_FOR: String,
    DESC_FOR: String,
    DAT_DEB_FOR: String,
    DAT_FIN_FOR: String,
    ID_DEMANDEUR: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Formation', FormationSchema);