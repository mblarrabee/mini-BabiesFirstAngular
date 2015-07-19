var appModule = angular.module('friendsList');

appModule.controller('mainCtrl', function($scope){
	$scope.friends = ["bobby", "ryan", "matt", "chris", "larry", "mckay"];
	
	

	$scope.addFriend = function(){
		$scope.friends.push($scope.newFriend);
		console.log($scope.friends);
	}
});
