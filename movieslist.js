const mongoose = require('mongoose');
const movieSchema = mongoose.Schema;

const userSchema = new Schema({
    title:{
        type: String,
        required: true,
        trim: true,
    },
    year:{
        type: Number,
        required: true,
        trim: true,
    },
    rating:{
        type: Number,
        required: true,
        trim: true,
        default:4,
    }

});

module.exports = mongoose.model('movielist',movieSchema);