const mongoose = require('mongoose');

const OffreSchema = mongoose.Schema({
    NOM_OFF: String,
    PHOTO_OFF: String,
    SEXE_CAND_OFF: String,
    DESC_OFF: String,
    MISSION_OFF: String,
    SAL_MIN_OFF: String,
    NOM_AVG_OFF: String,
    NOM_MC_OFF: String,
    NOM_TE_OFF: String,
    ARCHV_OFF: String,
    DAT_EXPIRA_OFF: String,
    ID_RECRUTEUR: String  
},{
    timestamps: true
} );

module.exports = mongoose.model('Offre', OffreSchema);