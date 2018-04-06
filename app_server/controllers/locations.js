/* GET 'home' page */
module.exports.homelist = function(req, res){
  res.render('locations-list', {
    title: 'Test - Title here',
    pageHeader: {
      title: 'Galleries:',
      strapline: 'Some Galleries!'
    },
    locations: [{
      name: 'Cologne Lots',
      address: '125 High Street, Reading, RG6 1PS',
      rating: 3,
      image:'/images/item-1.png',
      size: 'medium',
      facilities: ['Toilets', 'Food', 'Premium wifi'],
      distance: '100m'
    },
    { 
      name: 'Old Master & 19th Century Paintings and Drawings',
      address: '125 High Street, Reading, RG6 1PS',
      rating: 3,
      image:'/images/item-1.png',
      size: 'small',
      facilities: ['Toilets', 'Food', 'Premium wifi'],
      distance: '100m'
    },
    { 
      name: 'Jewellery & Boxes',
      address: '125 High Street, Reading, RG6 1PS',
      rating: 3,
      image:'/images/item-1.png',
      size: 'medium',
      facilities: ['Toilets', 'Food', 'Premium wifi'],
      distance: '100m'
    },
    { 
      name: 'Kolodotschko Collection',
      address: '125 High Street, Reading, RG6 1PS',
      rating: 3,
      image:'/images/item-1.png',
      size: 'regular',
      facilities: ['Toilets', 'Food', 'Premium wifi'],
      distance: '100m'
    },
    {
      name: 'Shoreditch Times',
      address: '20 Shoreditch Street, Shoreditch, London, RG6 1PS',
      rating: 4,
      image:'/images/item-2.png',
      size: 'medium',
      facilities: ['Cafe', 'Food', 'Library'],
      distance: '221m'
    },
    {
      name: 'Tate Modern',
      address: '221 Lower Street, London, RG6 1PS',
      rating: 2,
      image:'/images/item-3.png',
      size: 'medium',
      facilities: ['Cafe', 'Limited wifi'],
      distance: '250m'
    },
    {
      name: 'Lexo Gallery',
      address: '125 High Street, Reading, RG6 1PS',
      rating: 3,
      image:'/images/item-1.png',
      size: 'regular',
      facilities: ['Toilets', 'Food', 'Premium wifi'],
      distance: '100m'
    },
    {
      name: 'The Berlin Sale',
      address: '20 Shoreditch Street, Shoreditch, London, RG6 1PS',
      rating: 4,
      image:'/images/item-2.png',
      size: 'large',
      facilities: ['Cafe', 'Food', 'Library'],
      distance: '221m'
    },
    {
      name: '15th - 19th Century Paintings',
      address: '221 Lower Street, London, RG6 1PS',
      rating: 2,
      image:'/images/item-3.png',
      size: 'medium',
      facilities: ['Cafe', 'Limited wifi'],
      distance: '250m'
    },
    {
      name: 'African & Oceanic Art Gallery',
      address: '20 Shoreditch Street, Shoreditch, London, RG6 1PS',
      rating: 4,
      image:'/images/item-2.png',
      size: 'regular',
      facilities: ['Cafe', 'Food', 'Library'],
      distance: '221m'
    },
    {
      name: 'Netsuke IV',
      address: '221 Lower Street, London, RG6 1PS',
      rating: 2,
      image:'/images/item-3.png',
      size: 'large',
      facilities: ['Cafe', 'Limited wifi'],
      distance: '250m'
    }]
  });
};


/*module.exports.locationInfo = function(req, res) {
res.render('locations-list', {
	location: {
	  name: 'Gallery Uno',
	  address: '125 High Street, London, RG6 1PS',
	  rating: 4,
	  facilities: ['Cafe', 'Food', 'Art'],
	  coords: {lat: 22.4521141, lng: -2.9690884},
	  openingTimes: [{
	    days: 'Monday - Friday',
	    opening: '7:00am',
	    closing: '10:00pm',
	    closed: false
	  },{
	    days: 'Saturday',
	    opening: '8:00am',
	    closing: '5:00pm',
	    closed: false
	  },{
	    days: 'Sunday',
	    closed: true
	  }],
	  reviews: [{
	    author: 'Mr Barry',
	    rating: 5,
	    timestamp: '21 August 2016',
	    reviewText: 'What a great place. I can\'t say enough good things about it.'
	  },{
	    author: 'Mr Gandalf',
	    rating: 3,
	    timestamp: '26 June 2012',
	    reviewText: 'It was okay. Coffee wasn\'t great, but the wifi was fast.'
	  }]
	}
});
};
*/



/* GET 'Location info' page */
module.exports.locationInfo = function(req, res){
  res.render('locations-info', { title: 'Locations info' });
};

/* GET 'Add review' page */
module.exports.addReview = function(req, res){
  res.render('index', { title: 'Add review' });
};