const mongoose = require('mongoose');

const vocabCardModelSchema = mongoose.Schema({
        term: {
            type: [String],
            required: true,
            unique: true,
            trim: true,
        },
        defination: {
            type: [String],
            required: true,
            trim: true,
        },
        example: {
            type: [String],
            trim: true,
            default: []
        },
        url: {
            type: [String],
            trim: true,
            default: []
        },
        favorite: {
            type: Boolean,
            default: false
        },
        archive: {
            type: Boolean,
            default: false
        },
        current_set: {
            type: String,
            required: true,
            // default: ''
        },
        picture: {
            type: [Buffer],
            default: []
        },
})

const VocabCardModel = mongoose.model('VocabCardModel', vocabCardModelSchema)

module.exports = VocabCardModel;