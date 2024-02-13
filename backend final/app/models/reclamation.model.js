const mongoose = require('mongoose');

const ReclamationSchema = mongoose.Schema({
    SUJ_RECL: String,
    DESC_RECL: String,
    CAPTU_RECL: String,
    VUE_RECL : String,
    ID_RECRUTEUR: String,
    ID_OFFRE: String,
    ID_DEMANDEUR: String,
    RESPONS_ENV_RECL: String    
},{
    timestamps: true
} );

module.exports = mongoose.model('Reclamation', ReclamationSchema);