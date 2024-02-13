const mongoose = require('mongoose');

const LangueSchema = mongoose.Schema({
    NOM_LANG: {
        type: String,
        unique: [true, 'The nom is unique']
    }
},{
    timestamps: true
} );

module.exports = mongoose.model('Langue', LangueSchema);