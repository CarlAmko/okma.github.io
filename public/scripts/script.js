
var app = angular.module('mySite',[]);

app.controller('MainController', function($scope) {
	
	$scope.links = 
	[ 
		{
			name:'Home',
			url:'Home.htm'
		},
		{
			name:'Projects',
			url:'Projects.htm'
		},
		{
			name:'Skills',
			url:'Other.htm'
		},
		{
			name:'Contact',
			url:'Contact.htm'
		}
	];
	
});

app.controller('SlideshowController', function($scope) {
	var selector = 0;
	$scope.imgString = "jumbo" + selector + ".png";
});
