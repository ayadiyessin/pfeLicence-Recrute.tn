const mongoose = require('mongoose');

const ProjetSchema = mongoose.Schema({
    NOM_PROJ: String,
    TYPE_PROJ: String,
    DAT_DEB_PROJ: String,
    DAT_FIN_PROJ: String,
    DESC_PROJ: String,
    OUTIL_PROJ: String,
    ID_DEMANDEUR: String
},{
    timestamps: true
} );

module.exports = mongoose.model('Projet', ProjetSchema);