let mongoose = require('mongoose');

// create a model class
let surveyModel = mongoose.Schema({
    name: String,
    email: String,
    age: Number, 
},

{
    collection: "survey"
});

module.exports = mongoose.model('Survey', surveyModel);