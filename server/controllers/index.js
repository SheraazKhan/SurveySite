let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

// enable jwt
let jwt = require('jsonwebtoken');
let DB = require('../config/db');

//create the User Model
let userModel = require('../models/user');
let User = userModel.User;

module.exports.displayHomePage = (req, res, next) => {
    res.render('index', {title: 'Home'});
}

module.exports.displayAboutPage = (req, res, next) => {
    res.render('about', {title: 'About'});
}

module.exports.displayContactPage = (req, res, next) => {
    res.render('contact', {title: 'Contact us'});
}

module.exports.displayLoginPage = (req, res, next) => {
    //check if user is already logged in
    if(!req.user) 
{
    res.render('auth/login', 
    {title: 'Please Log In',
     messages: req.flash('loginMessage'),
     displayName: req.user ? req.user.displayName : ''});
    
}
else
{
    return res.redirect('/');
}
}
module.exports.processLoginPage = (req, res, next) => {
    passport.authenticate('local',
    (err, user, info) =>  {
        // server error
        if(err)
        {
            return next(err);
        }
        // wrong username or password
        if(!user)
        {
            req.flash('loginMessage', "Oops! Wrong username or password.");
            return res.redirect('/login');
        }
        // successful login
        req.logIn(user, (err) => {
            // server error
            if(err)
            {
                return next(err);
            }
            // redirect to the user's profile page
            return res.redirect('/survey-app');
        }
        );
        
    });
    (req, res, next);
    
}

module.exports.displayRegisterPage = (req, res, next) => {
   // check if user is already logged in
    if(!req.user)
    {
    res.render('auth/register',
    {title: 'Register',
    messages: req.flash('registerMessage'),
    displayName: req.user ? req.user.displayName : ''
    });
    
}
else
{
    return res.redirect('/register');
}
}
//process register page
module.exports.processRegisterPage = (req, res, next) => {
    // instantiate a new user
    let newUser = new User({
        username: req.body.username,
        //password: req.body.password,
        email: req.body.email,
        displayName: req.body.displayName,
    });

    User.register(newUser, req.body.password, (err) => {
        if(err)
        {
            console.log('Error while user register!');
            if(err.name == 'UserExistsError')
            {
                req.flash(
                    'registerMessage', 
                    'Registration Error: User Already Exists!');
                    console.log('User Already Exists!');
            }

            return res.render('auth/register', {
                title: 'Register',
                messages: req.flash('registerMessage'),
                displayName: req.user ? req.user.displayName : ''
                
            });
        }
      
        else
        {
              // if no error
                // redirect the user and authenticate
                return passport.authenticate('local')(req, res, () => {
                    res.redirect('/survey-app');
                }
            );
        }
    });
}


module.exports.performLogout = (req, res, next) => {
    req.logout();
    res.redirect('/');
}
