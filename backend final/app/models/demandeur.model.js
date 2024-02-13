const mongoose = require('mongoose');

const DemandeurSchema = mongoose.Schema({
    PHOTO_DEM: String,
    EMAIL_DEM:{
        type: String,
        unique: [true, 'the email is unique']
    },
    PSW_DEM: String,
    NOM_DEM: String,
    PRE_DEM: String,
    SEXE_DEM: String,
    DAT_NAI_DEM: String,
    VILLE_DEM: String,
    PAYS_DEM: String,
    ADRESSE_DEM: String,
    NUM_TEL_DEM: String,
    COD_POST_DEM: String,
    PERMIS_COND_DEM: String,
    TYPE_PERMIS_DEM: String,
    SAL_MIN_DEM: String,
    URL_LINK_DEM: String,
    DESC_DEM: String,
    SPES_DEM: String,
    ARCHIV_DEM:String,
    URL_FB_DEM: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Demandeur', DemandeurSchema);