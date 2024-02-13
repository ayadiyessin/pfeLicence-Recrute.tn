const mongoose = require('mongoose');

const DiplomeSchema = mongoose.Schema({
    TYPE_DIP: {
        type: String,
        unique: [true, 'The type is unique']
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Diplome', DiplomeSchema);