let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayLoginPage);

/* GET home page. */
router.get('/home', indexController.displayLoginPage);

/* GET home page. */
router.post('/home', indexController.processLoginPage);

/* GET home page. */
router.get('/login', indexController.displayLoginPage);

/* GET home page. */
router.post('/login', indexController.processLoginPage);

/* GET home page. */
router.post('/', indexController.processLoginPage);

/* GET About us page. */
router.get('/about', indexController.displayAboutPage);

/* GET Contact Us page. */
router.get('/contact', indexController.displayContactPage);

/* GET Register page. */
router.get('/register', indexController.displayRegisterPage);

/* GET Register page. */
router.post('/register', indexController.processRegisterPage);

/* POST Route for processing the Login page -  */
<<<<<<< HEAD
=======
router.post('/login',indexController.processLoginPage);

/* GET Route for processing the Login page -  */
>>>>>>> 9642a53c32939210d600d17a185730289a8418a7
router.get('/logout',indexController.performLogout);


module.exports = router;
