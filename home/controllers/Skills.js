(function() {
	'use strict';

	angular.module('myApp').controller('SkillsCtrl',  ['$scope', function($scope){
		$scope.skills = skills;
	}]);

	var skills = [
	{
		title: 'Personas',
		level: 'Intermediate',
		levelBar: 60,
		category: 'discovery'
	},
	{
		title: 'User Journey',
		level: 'Basic',
		levelBar: 40,
		category: 'discovery'
	},
	{
		title: 'Surveys',
		level: 'Basic',
		levelBar: 40,
		category: 'discovery'
	},
	{
		title: 'Google Analytics',
		level: 'Intermediate',
		levelBar: 50,
		category: 'discovery'
	},
	{
		title: 'Competitor Research',
		level: 'Intermediate',
		levelBar: 60,
		category: 'discovery'
	},
	{
		title: 'HTML5 & CSS3',
		level: 'Advanced',
		levelBar: 92,
		category: 'dev'
	},
	{
		title: 'Javascript',
		level: 'Intermediate',
		levelBar: 60,
		category: 'dev'
	},
	{
		title: 'CSS pre-processors (Sass & LESS)',
		level: 'Advanced',
		levelBar: 80,
		category: 'dev'
	},
	{
		title: 'JQuery',
		level: 'Advanced',
		levelBar: 84,
		category: 'dev'
	},
	{
		title: 'Bootstrap framework',
		level: 'Advanced',
		levelBar: 85,
		category: 'dev'
	},
	{
		title: 'AngularJS',
		level: 'Basic',
		levelBar: 32,
		category: 'dev'
	},
	{
		title: 'Version control (Git)',
		level: 'Intermediate',
		levelBar: 50,
		category: 'dev'
	},
	{
		title: 'Task runners (Gulp & Grunt)',
		level: 'Intermediate',
		levelBar: 45,
		category: 'dev'
	},
	{
		title: 'Performance and optimization ',
		level: 'Intermediate',
		levelBar: 55,
		category: 'dev'
	},
	
	{
		title: 'Wireframes, prototypes and mockups',
		level: 'Advanced',
		levelBar: 84,
		category: 'design'
	},
	{
		title: 'Responsive design',
		level: 'Advanced',
		levelBar: 92,
		category: 'design'
	},
	{
		title: 'Styleguides',
		level: 'Intermediate',
		levelBar: 68,
		category: 'design'
	},
	{
		title: 'Material design',
		level: 'Intermediate',
		levelBar: 75,
		category: 'design'
	},
	{
		title: 'Sitemaps',
		level: 'Advanced',
		levelBar: 85,
		category: 'design'
	},
	{
		title: 'Fireworks',
		level: 'Advanced',
		levelBar: 80,
		category: 'design'
	},

	{
		title: 'Axure Pro',
		level: 'Intermediate',
		levelBar: 75,
		category: 'design'
	},
	{
		title: 'Illustrator',
		level: 'Intermediate',
		levelBar: 70,
		category: 'design'
	},
	{
		title: 'Lightroom',
		level: 'Intermediate',
		levelBar: 60,
		category: 'design'
	},
	{
		title: 'A/B Testing',
		level: 'Intermediate',
		levelBar: 60,
		category: 'test'
	},
	{
		title: 'Heuristic Evaluation',
		level: 'Intermediate',
		levelBar: 60,
		category: 'test'
	},
	{
		title: 'Usability testing',
		level: 'Intermediate',
		levelBar: 60,
		category: 'test'
	},
	{
		title: 'Google Analytics',
		level: 'Intermediate',
		levelBar: 60,
		category: 'test'
	}
	]

}());
