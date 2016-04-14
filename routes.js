(function() {
	'use strict';
	angular.module('myApp').config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){

		$routeProvider.when('/',{
			templateUrl: 'views/index.html'
		})

		.when('/contact', {
			templateUrl: 'views/contact.html'
		})

		.otherwise({redirectTo: '/'});

		$locationProvider.html5Mode(true);

	}])
}());
