// MODULE
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

// ROUTES
weatherApp.config(function ($routeProvider) {
   
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    })
    
    .when('/forecast', {
        templateUrl: 'pages/forecast.html',
        controller: 'forecastController'
    })

    .when('/forecast/:days', {
        templateUrl: 'pages/forecast.html',
        controller: 'forecastController'
    });
    
});

//Services

weatherApp.service('locationService', function(){

	$scope.city = cityService.city;

	$scope.$watch('city', function(){
		cityService.city = $scope.city;
	});

});


// CONTROLLERS
weatherApp.controller('homeController', ['$scope', 'locationService', function($scope, locationService) {
    
}]);

weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'locationService', function($scope, $resource, $routeParams, locationService) {
    
	$scope.city = cityService.city;

	$scope.days = $routeParams.days || 2;

	$scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=6fbbc5078ed2d082c3c7cacaf3ec2317", {
		callback: "JSON_CALLBACK"},{ get: {method: 'JSONP'}});

	$scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: $scope.days });

	$scope.covertToF = function(degK) {
		return Math.round((1.8 * (degK -273)) +32);
	};

	$scope.convertToDate = function(dt) {

		return new Date(dt * 1000);
	};
}]);


//

