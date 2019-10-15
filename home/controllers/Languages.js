(function() {
	'use strict';

	angular.module('myApp').controller('LanguagesCtrl',  ['$scope', function($scope){
		$scope.languages = languages;
	}]);

	var languages = [
		{
			name: 'Portuguese',
			level: 'Native'
		},
		{
			name: 'English',
			level: 'Intermediate'
		},
		{
			name: 'Spanish',
			level: 'Intermediate'
		},
	]

}());
