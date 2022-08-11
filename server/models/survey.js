let mongoose = require('mongoose');
//Model Class
let questionSchema = new mongoose.Schema({
    question: {type:String,
    required:true},

    answer: {type: String,
    required: true},
})
// create a model class
let surveyModel = mongoose.Schema({
    name: String,
    description: String,
    created: String, 
    expires: String,
    question1: String,
    answer1: String,
    question2: String,
    answer2: String,
    question3: String,
    answer3: String,
    question4: String,
    answer4: String,
    questions: [questionSchema]
    
},

{
    collection: "survey"
});


module.exports = mongoose.model('Survey', surveyModel);