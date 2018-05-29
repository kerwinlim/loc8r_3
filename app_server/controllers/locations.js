/**
 * Created by kerwi on 5/28/2018.
 */

/* GET Home List page. */
module.exports.homeList = function(req,res){
    res.render('locations-list',
        {
            title: 'Loc8r - find a place to work with wifi.',
            pageHeader: {
                title: 'Loc8r',
                strapLine: 'Find places to work wih wifi near you!'
            },
            locations: [{
                name: 'Starcups',
                address: '125 High Street, Reading, RG6 1PS',
                rating: 3,
                facilities: ['Hot drinks', 'Food', 'Premium wifi'],
                distance: '100m'
            }, {
                name: 'Cafe Hero',
                address: '125 High Street, Reading, RG6 1PS',
                rating: 4,
                facilities: ['Hot drinks', 'Food', 'Premium wifi'],
                distance: '200m'
            }, {
                name: 'Burger Queen',
                address: '125 High Street, Reading, RG6 1PS',
                rating: 2,
                facilities: ['Food', 'Premium wifi'],
                distance: '250m'
            }],
            sidebar: "Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for."
        });
};

/* GET Location Info page */
module.exports.locationInfo = function(req,res) {
    res.render('location-info',{title: 'Location Info Page!'})
};

/* GET Add Review page */
module.exports.addReview = function(req,res){
    res.render('location-review-form',{ title: 'Add Review Page!'})
};