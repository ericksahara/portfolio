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
			title: 'Advanced Google Analytics',
			subtitle: 'Google Analytics Academy',
			description: 'Configurations like Custom Dimensions, Custom Metrics, and Event Tracking to collect data that\'s specific to the business.'
		},
		{
			title: 'User Research – Methods and Best Practices',
			subtitle: 'Interaction Design Foundation',
			description: 'How to carry out the most essential qualitative user research methods and best practices <a class="link hide-for-print" href="https://www.interaction-design.org/erick-sahara/certificate/course/P7hd52LLR?r=erick-sahara" target="_blank">View certificate</a>'
		},
		{
			title: 'Mobile User Experience (UX) Design',
			subtitle: 'Interaction Design Foundation',
			description: 'Best practices and how to evaluate a mobile design and avoid bad mobile user experiences <a class="link hide-for-print" href="https://www.interaction-design.org/erick-sahara/certificate/course/MVRKl8nQ3?r=erick-sahara" target="_blank">View certificate</a>'
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
