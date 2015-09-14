$(document).ready(function() {


    // Typing on main page
    $('.typing>span').typed({
        strings: [
            "an engineer.^1000",
            "a developer.^1000",
            "a designer.^1000",
            "Carl.^1000"
        ],
        typeSpeed: 50,
        showCursor: true,
        startDelay: 20,
        callback: function() {
            $("#carl-circle").css("opacity", 1.0);
            $("#carl-circle").css("margin-bottom", 0);
            $(".sub-text").css("opacity", "1.0");
        }
    });

    // Cool fade effect on scroll
    $(window).scroll(function() {
        $('.boxx').each(function() {

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
            if (bottom_of_window > bottom_of_box) {
                $(this).animate({
                    'opacity': '1'
                }, 500);
            }

            if (top_of_window > $(window).height()) {
                $('#menuBar').addClass('header-menu-scroll');

            } else {
                $('#menuBar').removeClass('header-menu-scroll');
            }
        });
    });

});

// Initialize angular module
var app = angular.module('mySite', []);

// Angular controller for the main content window
app.controller('MainController', function($scope) {

    // Object array of pages
    // Content is loaded from external HTM files using ng-include.
    $scope.links = [{
        name: 'Home',
        url: 'Home.htm',
        anchor: "#Home"
    }, {
        name: 'Projects',
        url: 'Projects.htm',
        anchor: "#Projects"
    }, {
        name: 'Expertise',
        url: 'Other.htm',
        anchor: "#Expertise"
    }, {
        name: 'Contact',
        url: 'Contact.htm',
        anchor: "#Contact"
    }];

});

app.controller('SocialMediaCtrl', function($scope) {
	$scope.medias =
	[
		{
			name: 'Facebook',
			url: 'https://facebook.com/itsdefnotcarl/',
			icon: 'fa-facebook'
		},
		{
			name: 'LinkedIn',
			url: 'https://www.linkedin.com/in/carlamko',
			icon: 'fa-linkedin'
		},
		{
			name: 'Github',
			url: 'https://github.com/Okma/',
			icon: 'fa-github'
		},
		{
			name: 'Email',
			url: 'https://mailto:c.amko@ufl.edu',
			icon: 'fa-envelope-o'
		}
	];

	$scope.mediaClicked = function(url) {
		window.open(url, "_blank");
	};
});