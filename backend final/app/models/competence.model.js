const mongoose = require('mongoose');

const CompetenceSchema = mongoose.Schema({
    NOM_COMP: {
        type: String,
        unique: [true, 'The nom is unique']
    }
},{
    timestamps: true
});

module.exports = mongoose.model('Competence', CompetenceSchema);