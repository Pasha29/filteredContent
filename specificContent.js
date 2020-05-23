const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SpecificContentSchema = new Schema({
    id: Number,
    name: String,
    preview: String,
    genre:String,
    year:Number,
    country:String,
    language:String,
    count:Number,
    duration:Number,
});

const specificContent = mongoose.model('specificContent', SpecificContentSchema);

module.exports = specificContent;