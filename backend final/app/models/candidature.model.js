const mongoose = require('mongoose');

const CandidatureSchema = mongoose.Schema({
    FAVORI_CAND: String,
    ARCHV_CAND: String,
    ID_OFFRE: String,
    ID_DEMANDEUR: String    
},{
    timestamps: true
} );

module.exports = mongoose.model('Candidature', CandidatureSchema);