'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1');

// angular.module('helloWorld.services', []).
// 	factory('helloWorldService', function($http) {
// 		var driversAPI = {};
// 		driversAPI.getDrivers = function() {
// 			return $http({
// 				method: 'JSONP',
// 				url: 'http://ergast.com/api/f1/2013/driverStandings.json?callback=JSON_CALLBACK'
// 			});
// 		}
// 		return driversAPI;
// 	})

angular.module('angularWeather.services', []).
	factory('todaysWeatherService', function($http){
		var todaysWeather = {};
		todaysWeather.getWeather = function(){
			return $http({
				method: 'JSONP',
				url: 'http://api.openweathermap.org/data/2.5/weather?q=bakersfield,ca&units=imperial&callback=JSON_CALLBACK'
			})
		}
		return todaysWeather;
	});

	//http://api.openweathermap.org/data/2.5/weather?q=bakersfield,ca&units=imperial
