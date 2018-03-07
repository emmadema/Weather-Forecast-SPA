//Module

let weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource', 'ngRoute']);

//Routes

weatherApp.config(function ($routeProvider){
	$routeProvider

//Route for main
	.when('/', {
		templateUrl: 'pages/home.html',
		controller: 'mainController'
	})

//route for forecast
	.when('/forecast', {
		templateUrl: 'pages/forecast.html',
		controller: 'forecastController'
	});
});

//home page controller

weatherApp.controller('mainController', ['$scope', function($scope){

}]);

//forcast page controller

weatherApp.controller('forecastController', ['$scope', function($scope){

}]);