const mongoose = require('mongoose');

const RecruteurSchema = mongoose.Schema({
    EMAIL_REC: {
        type: String,
        unique: [true, 'The email is unique']    
    },
    PSW_REC: String,
    SEC_DACT_ENT: String,
    EMAIL_ENT: String,
    IDENT_UNQ_ENT: String,
    NOM_ENT: String,
    LOGO_ENT: String,
    URL_WEB_ENT: String,
    URL_LINK_ENT: String,
    URL_FB_ENT: String,
    DESC_ENT:  String,
    PAYS_ORG_ENT: String,
    VILLE_ENT: String,
    ADRESSE_ENT: String,
    COD_POST_ENT: String,
    NUM_TEL_ENT: String,
    NB_SAL_ENT: String,
    VALID_ENT: String,
    X: String,
    Y: String,
    ARCHIV_REC: String,
    DAT_CREA_ENT: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Recruteur', RecruteurSchema);