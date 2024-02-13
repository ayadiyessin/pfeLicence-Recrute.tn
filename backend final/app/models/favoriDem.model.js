const mongoose = require('mongoose');

const FavoriDemSchema = mongoose.Schema({
    FAVORI_DEM: String,
    ID_RECRUTEUR: String,
    ID_DEMANDEUR: String    
},{
    timestamps: true
} );

module.exports = mongoose.model('FavoriDem', FavoriDemSchema);