const mongoose = require('mongoose');

const CompetencedemandeurSchema = mongoose.Schema({
    NIV_COMP_DEM: String,
    ID_COMPETENCE: String,
    ID_DEMANDEUR: String
},{
    timestamps: true
});

module.exports = mongoose.model('Competencedemandeur', CompetencedemandeurSchema);