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

/* GET Register page. */
router.post('/register', indexController.processRegisterPage);

/* GET Login page. */
router.get('/login', indexController.displayLoginPage);

/* POST Route for processing the Login page -  */
router.post('/login',indexController.processLoginPage);

/* POST Route for processing the Login page -  */
router.post('/logout',indexController.performLogout);


module.exports = router;
