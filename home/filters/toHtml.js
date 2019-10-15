(function() {
	'use strict';

	angular.module('myApp').filter('toHTML', ['$sce', function($sce){
		return function(text) {
			return $sce.trustAsHtml(text);
		};
	}]);

}());
