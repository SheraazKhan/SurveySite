let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET About us page. */
router.get('/about', indexController.displayAboutPage);

/* GET Contact Us page. */
router.get('/contact', indexController.displayContactPage);

/* GET Register page. */
router.get('/register', indexController.displayRegisterPage);

/* Post Route for Processing register page. */
router.post('/register', indexController.processRegisterPage);

/* GET route for displaying Login page. */
router.get('/login', indexController.displayLoginPage);

/* Post Rout for Processing Login page. */
router.post('/login', indexController.processLoginPage);

/* Get  for Logout page. */
router.get('/logout', indexController.performLogout);

module.exports = router;
