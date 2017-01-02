$(document).ready(function() {

    // Typing on main page
    $('.typing>span').typed({
        strings: [
            "ambitious.^600",
            "energetic.^600",
            "a developer.^600",
            "Carl.^450"
        ],
        typeSpeed: 30,
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
            var bottom_of_box = top_of_box + 2 * $(this).outerHeight() / 5;

            // Top of visible window.
            var top_of_window = $(window).scrollTop();

            // Offset of -300, arbitrary delay distance.
            var bottom_of_window = top_of_window + $(window).height();

            // 'Fade In' effect when our viewport approaches this box.
            if (bottom_of_window > bottom_of_box) {
                $(this).children().animate({
                    'opacity': 1.0,
                    'margin-left': 0
                }, 500);
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
    $scope.links = [
        // {
        //     title: 'Who Am I',
        //     id: 'WhoAmI',
        //     url: './pages/Home.html',
        //     anchor: "#WhoAmI"
        // },
        {
            title: 'What I Do',
            id: 'WhatIDo',
            url: './pages/About.html',
            anchor: "#WhatIDo"
        },
        //  {
        //   title: 'What\'s Happening',
        //   id: 'NewsFeed',
        //   url: './pages/News.html',
        //   anchor: "#NewsFeed"
        // },
        {
            title: 'Let\'s Talk',
            id: 'Contact',
            url: './pages/Contact.html',
            anchor: "#Contact"
        }
    ];

});

app.controller('previewController', function($scope, $window) {
    $scope.previews = [{
            title: 'Tyto Online',
            imgURL: '../img/tyto_online.jpg',
            link: 'http://tytoonline.com/',
            blockSize: 'col-sm-12',
            desc: 'Solve problems and complete quests while learning real-world science with your friends.'
        }, {
            title: 'Tyto Ecology',
            imgURL: '../img/tyto_ecology.jpg',
            link: 'http://store.steampowered.com/app/453750/',
            blockSize: 'col-sm-6',
            desc: 'Create and balance your own ecosystem.'
        },
        // {
        //   title: 'Tusk Textventure',
        //   imgURL: '../img/tusk-text-venture.jpg',
        //   link: 'http://byteusgaming.com/Tusk-Textventure',
        //   blockSize: 'col-sm-6',
        //   desc: 'Action adventure in 8-bit style.'
        // },
        {
            title: 'Hex Clock',
            imgURL: '../img/hexclock.jpg',
            link: 'http://hexclock.herokuapp.com/',
            blockSize: 'col-sm-6',
            desc: 'Tell time in style.'
        }, {
            title: 'Biotility',
            imgURL: '../img/biotility.jpg',
            link: 'https://biotility.herokuapp.com/',
            blockSize: 'col-sm-6',
            desc: 'Prepare for the BACE.'
        }, {
            title: 'Pic-A-Pun',
            imgURL: '../img/PicAPun.jpg',
            link: 'http://devpost.com/software/picapun',
            blockSize: 'col-sm-6',
            desc: 'Hackathon winner that generates puns from images.'
        },
    ];

    $scope.go = function(URL) {
        $window.open(URL, "_blank");
    }
});

app.controller('aboutController', function($scope) {
    $scope.info = [{
        title: 'DESIGN',
        icon: 'fa-cubes',
        desc: 'Countless iterations until satisfied.'
    }, {
        title: 'CODE',
        icon: 'fa-code',
        desc: 'Unique projects written completely from scratch.'
    }, {
        title: 'TEST',
        icon: 'fa-area-chart',
        desc: 'Results-driven testing to optimize development.'
    }, {
        title: 'ADAPT',
        icon: 'fa-cogs',
        desc: 'Quickly learn and adapt new technologies.'
    }];
});

app.controller('TwitterController', ["$scope", "$http", function($scope, $http) {

    // array of tweets to store after HTTP request
    $scope.tweets = [];

    // add API calling later

}]);

app.controller('SocialMediaCtrl', function($scope) {
    $scope.showMedia = "";

    // Scoped array of social media info
    $scope.medias = [{
        name: 'Facebook',
        url: 'https://facebook.com/itsdefnotcarl/',
        icon: 'fa-facebook',
        display: 'Facebook'
    }, {
        name: 'Twitter',
        url: 'https://twitter.com/CarlAmko',
        icon: 'fa-twitter',
        display: 'Twitter'
    }, {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/carlamko',
        icon: 'fa-linkedin',
        display: 'LinkedIn'
    }, {
        name: 'GitHub',
        url: 'https://github.com/Okma/',
        icon: 'fa-github',
        display: 'GitHub'
    }, {
        name: 'Medium',
        url: 'https://medium.com/@CarlAmko',
        icon: 'fa-medium',
        display: 'Medium'
    }, {
        name: 'Email',
        url: 'mailto:carl@carlamko.me',
        icon: 'fa-envelope-o',
        display: 'Email: carl@carlamko.me'
    }];

    $scope.mediaClicked = function(url) {
        if (url) { // if URL is valid, follow the link in blank target.
            window.open(url, "_blank");
        }
    };

    /** Showing and hiding of the media description. */
    $scope.mediaHover = function(media) {
        $scope.showMedia = media.display;
    };
    $scope.mediaOut = function() {
        $scope.showMedia = "";
    }
});
