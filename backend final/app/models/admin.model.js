const mongoose = require('mongoose');

const AdminSchema = mongoose.Schema({
    PHOTO_ADM: String,
    EMAIL_ADM:  {
        type: String, 
        unique: [true, 'The email is unique']
    },
    PSW_ADM: String,
    NOM_ADM: String,
    PRE_ADM: String,
    SEXE_ADM: String,
    VILLE_ADM: String,
    NUM_TEL_ADM: String,
    ARCHIV_ADM: String,
    ETAT_ADM : String
}, {
    timestamps: true
});

module.exports = mongoose.model('Admin', AdminSchema);