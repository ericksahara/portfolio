(function() {
	'use strict';

	angular.module('myApp').controller('SkillsCtrl',  ['$scope', function($scope){
		$scope.skills = skills;
	}]);

	var skills = [
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
		title: 'Sass & Less',
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
		title: 'Responsive Design',
		level: 'Advanced',
		levelBar: 88,
		category: 'dev'
	},
	{
		title: 'Bootstrap framework',
		level: 'Advanced',
		levelBar: 85,
		category: 'dev'
	},
	{
		title: 'Foundation framework',
		level: 'Advanced',
		levelBar: 80,
		category: 'dev'
	},
	{
		title: 'AngularJS',
		level: 'Basic',
		levelBar: 32,
		category: 'dev'
	},
	{
		title: 'Git',
		level: 'Intermediate',
		levelBar: 50,
		category: 'dev'
	},
	{
		title: 'Gulp & Grunt',
		level: 'Intermediate',
		levelBar: 45,
		category: 'dev'
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
		levelBar: 65,
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
	}
	]

}());
