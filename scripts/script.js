$(document).ready(function() {
	
	// Cool fade effect on scroll
	$(window).scroll(function() {
		$('.boxx').each(function(){
			
			// The top of the box we're targeting.
			var top_of_box = $(this).position().top;
			
			// The bottom of the box we're targeting.
			var bottom_of_box = top_of_box + $(this).outerHeight();
			
			var offset = $(this).outerHeight() / 2;
			
			// Top of visible window.
			var top_of_window = $(window).scrollTop();
			
			// Offset of -300, arbitrary delay distance.
            var bottom_of_window = top_of_window + $(window).height() - offset;
			
			// 'Fade In' effect when our viewport approaches this box.
			 if( bottom_of_window > bottom_of_box ){  
                $(this).animate({'opacity':'1'},500);   
            } 
		});
	});
	
	// Slideshow switcher
	var selector = 0;
	window.setInterval(function() {
		selector++;
		if(selector > 3) selector = 0;
		var stringPath = "jumbo" + selector +".png";
		$('#slideshow').css('background-image',"url(" + stringPath + ")");
	}, 5000);
});

// Initialize angular module
var app = angular.module('mySite',[]);

// Angular controller for the main content window
app.controller('MainController', function($scope) {
	
	// Object array of pages
	// Content is loaded from external HTM files using ng-include.
	$scope.links = 
	[ 
		{
			name:'Home',
			url:'Home.htm',
			anchor: "#Home"
		},
		{
			name:'Projects',
			url:'Projects.htm',
			anchor: "#Projects"
		},
		{
			name:'Skills',
			url:'Other.htm',
			anchor: "#Skills"
		},
		{
			name:'Contact',
			url:'Contact.htm',
			anchor: "#Contact"
		}
	];
	
});

// Angular controller for the jumbotron slideshow
app.controller('SlideshowController', function($scope) {
	
});
