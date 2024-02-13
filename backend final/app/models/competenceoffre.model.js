const mongoose = require('mongoose');

const CompetenceoffreSchema = mongoose.Schema({
    NIV_COMP_OFF: String,
    ID_COMPETENCE: String,
    ID_OFFRE: String
},{
    timestamps: true
});

module.exports = mongoose.model('Competenceoffre', CompetenceoffreSchema);