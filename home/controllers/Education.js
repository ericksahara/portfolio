(function() {
	'use strict';

	angular.module('myApp').controller('EducationCtrl', ['$scope', function($scope){
		$scope.education = educationItems;
	}]);

	var educationItems = [
		{
			title: 'Degree in Internet Systems Development',
			subtitle: 'IBTA - Instituto Brasileiro de Tecnologia Avançada',
			description: 'Duration: 2 years and a half'
		},
		{
			title: 'Programming in HTML5 with Javascript and CSS3',
			subtitle: 'Microsoft Specialist',
			description: 'Exam 70-480'
		}
	]

}());
