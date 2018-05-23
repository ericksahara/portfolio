(function() {
	'use strict';

	angular.module('myApp').controller('ExperiencesCtrl',  ['$scope', function($scope){
		$scope.experiences = experiences;
	}]);

	var experiences = [
		{
			title: 'UX Designer',
			subtitle: 'Freelance',
			period: '2016 - present',
			description: 'Stakeholder interview, personas, sitemap and user flows, wireframes, mockups and web development. Clients include Kei - Espaço de Arte and Comeb Digital. <a class="link hide-for-print" href="https://www.behance.net/ericksahara" target="_blank">See the projects.</a>'
		},
		{
			title: 'UX Designer',
			subtitle: 'Pagar.me',
			period: '2017 - 2018',
			description: 'I participated in user research identifying opportunities that match the user´s needs with business requirements in order to validate a specific hypothesis. Also created user flows and low fidelity prototypes using Axure and helped UI Designers improve the visual design of Pagar.me products.'
		},
		{
			title: 'Front-end developer & UX/UI Designer',
			subtitle: 'Treinaweb',
			period: '2013 - 2017',
			description: 'Worked on a responsive web redesign for <a class="link" href="https://www.treinaweb.com.br/" target="_blank">Treinaweb</a>. Over these years, I created sketches, wireframes, mockups and improved usability issues through techniques such as heatmapping. Also responsible for implementing visual and interactive elements as Front-end developer.'
		},

		{
			title: 'Front-end developer',
			subtitle: 'Freelance',
			period: '2013 - 2015',
			description: 'Front-end development for clients such as <a class="link" href="http://www.sapientnitro.com.br/" target="_blank">SapientNitro</a>, <a class="link" href="http://www.institutotomieohtake.org.br/" target="_blank">Instituto Tomie Ohtake</a> and <a class="link" href="https://www.queroquitar.com.br/" target="_blank">QueroQuitar</a>.'

		},
		
		{
			title: 'Front-end developer & Web Designer',
			subtitle: 'Xess Serviços de Informática LTDA',
			period: '2012 - 2013',
			description: 'Web designer for a digital agency. Clients include <a class="link" href="https://www.coral.com.br" target="_blank">Tintas Coral</a> and <a class="link" href="http://www.faap.br/" target="_blank">FAAP</a>. I was responsible for improving and fixing their projects. I also made creative banners using tools such as Photoshop and Illustrator.'

		},
		{
			title: 'Front-end developer',
			subtitle: 'Ultrahaus Digital',
			period: '2012',
			description: 'I worked with the entire team to make great products using technologies such as HTML, CSS and Javascript. Clients include <a class="link" href="http://www.playcenter.com.br/" target="_blank">Playcenter</a>, <a class="link" href="http://www.suporti.com/" target="_blank">Suporti</a>, <a class="link" href="http://www.nordicasoftware.com.br/" target="_blank">Nórdica Software</a> and <a class="link" href="http://santherprofessional.com.br/" target="_blank">Santher Professional.</a>'

		},
		{
			title: 'Internship in Web Design',
			subtitle: 'TAK Digital LTDA',
			period: '2011-2012',
			description: 'Front-end development with HTML, CSS and Javascript.'

		}
	]


}());
