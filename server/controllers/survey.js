let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//create a reference to the model
let Survey = require('../models/survey');

module.exports.displaySurveyList = (req, res, next) => {
    Survey.find((err, surveyList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(survey);
            res.render('survey/list', 
            {title: 'Questions', SurveyList: surveyList, 
            displayName: req.user ? req.user.displayName : ''});
        }
    });
}


module.exports.displayAddPage = (req, res, next) => {
    res.render('survey/add', {title: 'Create New Survey',
    displayName: req.user ? req.user.displayName : ''});
}

module.exports.processAddPage = (req, res, next) => {
    let newSurvey = Survey({
        "name": req.body.name,
        "description": req.body.description,
        "created": req.body.created,
        "expires": req.body.expires,
        "question1": req.body.question1,
        "answer1": req.body.answer1,
        "question2": req.body.question2,
        "answer2": req.body.answer2,
        "question3": req.body.question3,
        "answer3": req.body.answer3,
        "question4": req.body.question4,
        "answer4": req.body.answer4,

    });

    Survey.create(newSurvey, (err, Survey) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/survey-app');
        }
    });
} 

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Survey.findById(id, (err, surveyToEdit)=> {
        if(err)
        {
            console.log(err)
            res.end(err);
        }
        else
        {
            res.render('survey/edit', 
            {title: 'Edit Survey Information', 
            survey: surveyToEdit,
            displayName: req.user ? req.user.displayName : ''})
        }
    });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id;

    let updatedSurvey = Survey({
        "_id": id,
        "name": req.body.name,
        "description": req.body.description,
        "created": req.body.created,
        "expires": req.body.expires,
        "question1": req.body.question1,
        "answer1": req.body.answer1,
        "question2": req.body.question2,
        "answer2": req.body.answer2,
        "question3": req.body.question3,
        "answer3": req.body.answer3,
        "question4": req.body.question4,
        "answer4": req.body.answer4,
        
        
    });
    //survey not accessible if it is expired
    if(updatedSurvey.expires < Date.now())
    {
        res.redirect('/survey-app');
    }
   

    Survey.updateOne({_id: id}, updatedSurvey, (err) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/survey-app');
        }
    });
}


module.exports.performDelete =  (req, res, next) => {
    let id = req.params.id;
    Survey.remove({_id: id}, (err) => {
       if(err)
       {
        console.log(err);
        res.end(err);
       } 
       else
       {
        res.redirect('/survey-app')
       }
    });
}
