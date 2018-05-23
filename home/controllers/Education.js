(function() {
	'use strict';

	angular.module('myApp').controller('EducationCtrl', ['$scope', function($scope){
		$scope.education = educationItems;
	}]);

	var educationItems = [
		{
			title: 'UX Digital: User Experience for Digital Platforms (Extension Program)',
			subtitle: 'PUC - Pontifícia Universidade Católica de São Paulo',
			description: 'Aspects such as usability, information architecture, interaction design, accessibility, human factors, content strategy and user research.'
		},
		{
			title: 'Human-Computer Interaction',
			subtitle: 'Interaction Design Foundation',
			description: 'Deep understanding of the human behind the term "user" and the ingredients of a great user experience. <a class="link hide-for-print" href="https://www.interaction-design.org/erick-sahara/certificate/course/MHHsTJGrs" target="_blank">View certificate</a>'
		},
		{
			title: 'Web Design for Usability',
			subtitle: 'Interaction Design Foundation',
			description: 'Understand the principles of user-centred design and how it improves usability. <a class="link hide-for-print" href="https://www.interaction-design.org/erick-sahara/certificate/course/MJS5k6wcl" target="_blank">View certificate</a>'
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
