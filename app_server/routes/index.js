var express = require('express');
var router = express.Router();

var ctrlLocations = require('../controllers/locations');
var ctrlOthers= require('../controllers/others');

/* Locations pages */
router.get('/',ctrlLocations.homeList);
router.get('/location/:locationid',ctrlLocations.locationInfo);
router.get('/location/:locationid/reviews/new',ctrlLocations.addReview);
router.post('/location/:locationid/reviews/new',ctrlLocations.doAddReview);


/* Other pages */
router.get('/about',ctrlOthers.about);

/* GET home page. */
//router.get('/', ctrlMain.index);

module.exports = router;


