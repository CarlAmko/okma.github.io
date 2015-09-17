$(document).ready(function() {


    // Typing on main page
    $('.typing>span').typed({
        strings: [
            "an engineer.^1000",
            "a developer.^1000",
            "a designer.^1000",
            "Carl.^600"
        ],
        typeSpeed: 50,
        showCursor: true,
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
            var top_of_box = $(this).offset().top;

            // The bottom of the box we're targeting.
            var bottom_of_box = top_of_box + $(this).outerHeight();

            // Top of visible window.
            var top_of_window = $(window).scrollTop();

            // Offset of -300, arbitrary delay distance.
            var bottom_of_window = top_of_window + $(window).height();

            // 'Fade In' effect when our viewport approaches this box.
            if (bottom_of_window > bottom_of_box) {
                $(this).animate({
                    'opacity': '1',
                    'margin-bottom': '0'
                }, 500);
            }

            if (top_of_window > $(window).height()) {
                $('#menuBar').addClass('header-menu-scroll');

            } else {
                $('#menuBar').removeClass('header-menu-scroll');
            }
        });
    });

    // Link scrolling
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 600, 'swing');
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

app.controller('ProjectCtrl', function($scope) {
    $scope.projectDesc = "Hover over a project to learn more about it!";

    $scope.people = [{
        name: "Stephanie Cruz",
        url: "http://scruz2294.github.io/"
    }, {
        name: "Noah Presser",
        url: "http://noahpresser.github.io/"
    }, {
        name: "Evan Clendenning",
        url: "https://www.facebook.com/MuffinofChaos?fref=ts&ref=br_tf"
    },  {
        name: "Kevin Portuondo",
        url: "https://www.linkedin.com/pub/kevin-portuondo/30/aaa/396"
    }];

    $scope.projects = [{
        name: "Oracle Database Project with SQL",
        desc: "One-semester team project concerning database design, implementation, and query using SQL.",
        url: "",
        team: [$scope.people[0]]
    }, {
        name: "Giftionary",
        desc: "Web application game prototype with up to 6 simultaneous users.",
        url: "https://gifti0nary.herokuapp.com",
        team: ""
    }, {
        name: "Tyto Ecology",
        desc: "Long-term project; educational ecology simulator for iOS.",
        url: "https://immersedgames.com/games",
        team: [$scope.people[1]]
    }, {
        name: "Tusk Textventure",
        desc: "Text-based forge-your-own-path game with 8-bit style.",
        url: "http://byteusgaming.com/Tusk-Textventure",
        team: [$scope.people[3]]
    }];

    $scope.changeDesc = function(project) {
    	$scope.projectDesc = project ? project.desc : "Hover over a project to learn more about it!";
        $scope.otherInfo = project ? project.url : "";
        $scope.otherTeam = project ? project.team : "None";
    }
});

app.controller('SocialMediaCtrl', function($scope) {
    $scope.showMedia = "";

    $scope.medias = [{
        name: 'Facebook',
        url: 'https://facebook.com/itsdefnotcarl/',
        icon: 'fa-facebook',
        display: 'Facebook'
    }, {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/carlamko',
        icon: 'fa-linkedin',
        display: 'LinkedIn'
    }, {
        name: 'Github',
        url: 'https://github.com/Okma/',
        icon: 'fa-github',
        display: 'Github'
    }, {
        name: 'Email',
        url: '',
        icon: 'fa-envelope-o',
        display: 'Email: c.amko@ufl.edu'
    }];

    $scope.mediaClicked = function(url) {
        if (url) {
            window.open(url, "_blank");
        }
    };
    $scope.mediaHover = function(media) {
    	$scope.showMedia = media.display;
    };
    $scope.mediaOut = function() {
    	$scope.showMedia = "";
    }
});
