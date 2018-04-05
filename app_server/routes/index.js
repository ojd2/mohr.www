/*
	A file to store routes so that we can use 
	the exposed method in the router definition.
*/

// Declarations:
var express = require('express');
var router = express.Router();

// Require Controllers:
var ctrlLocations = require('../controllers/locations');
var ctrlOthers = require('../controllers/others');

/*
	Begin our router export for controllers above,
	simply acts as a mapping service, taking the 
	URL of an incoming request and mapping it to 
	a specific piece of application functionality. 
*/

/* GET Locations */

// First GET Homepage: 
router.get('/', ctrlLocations.homelist);
// Get Location:
router.get('/locations', ctrlLocations.locationInfo);
// Get Review:
router.get('/location/review/new', ctrlLocations.addReview);

/* Other pages */

// GET about page:
router.get('/about', ctrlOthers.about);

// Export routes so far:
module.exports = router;