/**
 * Created by kerwi on 5/28/2018.
 */

/* GET Home List page. */
module.exports.homeList = function(req,res){
    res.render('locations-list',{ title: 'Home Page List !'})
};

/* GET Location Info page */
module.exports.locationInfo = function(req,res) {
    res.render('location-info',{title: 'Location Info Page!'})
};

/* GET Add Review page */
module.exports.addReview = function(req,res){
    res.render('location-review-form',{ title: 'Add Review Page!'})
};