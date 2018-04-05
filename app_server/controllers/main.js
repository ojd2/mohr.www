/*
	A file to hold the controller code.
*/

// GET home page Module:
module.exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};
