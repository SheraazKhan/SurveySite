let express = require('express');
let router = express.Router();

module.exports.displayHomePage = (req, res, next) => {
    res.render('index', {title: 'Home'});
}

module.exports.displayAboutPage = (req, res, next) => {
    res.render('about', {title: 'About'});
}

module.exports.displayContactPage = (req, res, next) => {
    res.render('contact', {title: 'Contact us'});
}

module.exports.displayRegisterPage = (req, res, next) => {
    res.render('register', {title: 'Register'});
    
}

module.exports.displayLoginPage = (req, res, next) => {
    res.render('login', {title: 'Please Log In'});
    
}

