const mongoose = require('mongoose');

const VieassociativeSchema = mongoose.Schema({
    NOM_VA: String,
    POSITION_VA: String,
    DAT_DEB_VA: String,
    DAT_FIN_VA: String,
    ID_DEMANDEUR: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Vieassociative', VieassociativeSchema);