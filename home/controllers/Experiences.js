(function() {
	'use strict';

	angular.module('myApp').controller('ExperiencesCtrl',  ['$scope', function($scope){
		$scope.experiences = experiences;
	}]);

	var experiences = [
		{
			title: 'Freelance Front-end developer',
			subtitle: 'Freelancer',
			period: '2013 - present',
			description: 'Front-end development for clients such as <a class="link" href="http://www.sapientnitro.com.br/" target="_blank">SapientNitro</a>, <a class="link" href="http://www.institutotomieohtake.org.br/" target="_blank">Instituto Tomie Ohtake</a> and <a class="link" href="https://www.queroquitar.com.br/" target="_blank">QueroQuitar</a>.'

		},
		{
			title: 'Front-end developer & UI Designer',
			subtitle: 'Treinaweb',
			period: '2013 - present',
			description: 'Front-End Development, mockups and wireframes. <a class="link hide-for-print" href="http://treinaweb.com.br/" target="_blank">See the project.</a>'

		},
		{
			title: 'Front-end developer & Web Designer',
			subtitle: 'Xess Serviços de Informática LTDA',
			period: '2012 - 2013',
			description: 'Web designer for a digital agency. Clients include <a class="link" href="https://www.coral.com.br" target="_blank">Tintas Coral</a> and <a class="link" href="http://www.faap.br/" target="_blank">FAAP</a>. I was responsible for improve and fix their projects. I also made creative banners using tools such as Photoshop and Illustrator.'

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
