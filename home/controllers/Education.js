(function() {
	'use strict';

	angular.module('myApp').controller('EducationCtrl', ['$scope', function($scope){
		$scope.education = educationItems;
	}]);

	var educationItems = [
		{
			title: 'Member of Interaction Design Foundation',
			subtitle: 'Interaction Design Foundation',
			description: 'User experience and interaction design skills, focusing on user research and user-centred design. Course certificates: <a class="link" href="https://www.interaction-design.org/erick-sahara/certificate/course/MxKVGnVJX?r=erick-sahara" target="_blank">Become a UX Designer from scratch</a>'
		},
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
