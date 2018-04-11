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







/* GET 'Index' page */
module.exports.index = function(req, res){
  res.render('index', { title: 'index' });
};
/* GET 'Information' page */
module.exports.information = function(req, res){
  res.render('information', { title: 'information' });
};

/* GET 'Add review' page */
module.exports.addReview = function(req, res){
  res.render('index', { title: 'Add review' });
};