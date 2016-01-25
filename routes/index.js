
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('index', {
  	'projects': [
  		{
    		'name': 'Internship at Keysight-Agilent Technologies',
    		'image': 'CustomizableToolbar.jpg',
    		'id': 'project1'
    	},
    	{
    		'name': 'Second Internship at Keysight Technologies',
    		'image': 'Kinematics.jpg',
    		'id': 'project2'
    	},
    	{
    		'name': 'Security Projects From Classes',
        'image': 'cyber.jpg',
    		'id': 'project3'
    	}
    ]
  });
};