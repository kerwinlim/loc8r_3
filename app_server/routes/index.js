var express = require('express');
var router = express.Router();


var ctrlLocations = require('../controllers/locations');
var ctrlOthers= require('../controllers/others');

/* Locations pages */
router.get('/',ctrlLocations.homeList);
router.get('/location',ctrlLocations.locationInfo);
router.get('/location/review/new',ctrlLocations.addReview);

/* Other pages */
router.get('/about',ctrlOthers.about);

/* GET home page. */
//router.get('/', ctrlMain.index);

module.exports = router;
