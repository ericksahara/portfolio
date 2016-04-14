(function() {
	'use strict';

	angular.module('myApp').controller('FormCtrl', ['$scope', '$http', '$sce', function($scope, $http, $sce){
		var _this = this;

		_this.submitForm = function($scope){

			$http({
				method: 'POST',
				'url': 'post-contact.php',
				data: {
					name: _this.name,
					email: _this.email,
					message: _this.message
				}
			}).then(function(response){
					_this.response = $sce.trustAsHtml(response.data);
			})
		}

	}]);

}());
