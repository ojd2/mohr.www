/* GET 'home' page */
module.exports.homelist = function(req, res){
  res.render('locations-list', {
    title: 'Test - Title here',
    pageHeader: {
      title: 'Galleries:',
      strapline: 'Some Galleries!'
    },
    locations: [{
      name: 'Lexo Gallery',
      address: '125 High Street, Reading, RG6 1PS',
      rating: 3,
      image:'/images/item-1.png',
      facilities: ['Toilets', 'Food', 'Premium wifi'],
      distance: '100m'
    },{
      name: 'Shoreditch Times',
      address: '20 Shoreditch Street, Shoreditch, London, RG6 1PS',
      rating: 4,
      image:'/images/item-2.png',
      facilities: ['Cafe', 'Food', 'Library'],
      distance: '221m'
    },{
      name: 'Roger Stone',
      address: '221 Lower Street, London, RG6 1PS',
      rating: 2,
      image:'/images/item-3.png',
      facilities: ['Cafe', 'Limited wifi'],
      distance: '250m'
    }]
  });
};



/* GET 'Location info' page */
module.exports.locationInfo = function(req, res){
  res.render('locations-info', { title: 'Locations info' });
};

/* GET 'Add review' page */
module.exports.addReview = function(req, res){
  res.render('index', { title: 'Add review' });
};