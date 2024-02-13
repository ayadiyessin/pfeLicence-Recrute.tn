const mongoose = require('mongoose');

const CertificationSchema = mongoose.Schema({
    NOM_CERT: String,
    REF_CERT: String,
    DESC_CERT: String,
    ID_DEMANDEUR: String
},{
    timestamps: true
});

module.exports = mongoose.model('Certification', CertificationSchema);