'use strict';

/* Controllers */

// angular.module('myApp.controllers', []).
//   controller('MyCtrl1', [function() {

//   }])
//   .controller('MyCtrl2', [function() {

//   }]);
// angular.module('helloWorld.controllers', []).
// 	controller('driversController', function($scope, helloWorldService) {

// 		$scope.nameFilter = null;
// 		$scope.driversList = [];

// 		helloWorldService.getDrivers().success(function (response) {
// 			$scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
// 		});
		
// 	});

angular.module('angularWeather.controllers', []).
	controller('todaysWeatherController', function($scope, todaysWeatherService) {
		
		$scope.todaysWeather = [];
		todaysWeatherService.getWeather().success(function(response){
			$scope.todaysWeather = response;
		});

		function format_dt(dt) {
			var date = new Date(dt*1000);
			// hours part from the timestamp
			var hours = date.getHours();
			// minutes part from the timestamp
			var minutes = date.getMinutes();
			// seconds part from the timestamp
			var seconds = date.getSeconds();
			return hours + ':' + minutes + ':' + seconds;
		}
		
		// will display time in 10:30:23 format
		$scope.formattedTime = format_dt($scope.todaysWeather);

	});

