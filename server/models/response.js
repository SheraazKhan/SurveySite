let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let questionAnswerSchema = new Schema({
    question: {type:Array [Object],
    required:true},
    answer: {type: Boolean,
    required: true},
    created: {type: Date,
    default: Date.now},
    expires: {type: Date,
    default: Date.now},
   

    });
    module.exports = mongoose.model('QuestionAnswer', questionAnswerSchema);