$(document).ready(function() {
  // Typing on main page
  $('.typing>span').typed({
    strings: [
      "an engineer.^1000",
      "a developer.^1000",
      "glad you're here!^1000",
      "Carl.^600"
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
      var bottom_of_box = top_of_box +  2 * $(this).outerHeight() / 5;

      // Top of visible window.
      var top_of_window = $(window).scrollTop();

      // Offset of -300, arbitrary delay distance.
      var bottom_of_window = top_of_window + $(window).height();

      // 'Fade In' effect when our viewport approaches this box.
      if (bottom_of_window > bottom_of_box) {
        $(this).children().animate({
          'opacity' : 1.0,
          'margin-left' : 0
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
  $scope.links = [{
    title: 'Who Am I',
    id: 'WhoAmI',
    url: './pages/Home.htm',
    anchor: "#WhoAmI"
  }, {
    title: 'What I Do',
    id: 'WhatIDo',
    url: './pages/About.htm',
    anchor: "#WhatIDo"
  }, {
    title: 'Contact',
    id: 'Contact',
    url: './pages/Contact.htm',
    anchor: "#Contact"
  }];

});

app.controller('previewController', function($scope, $window) {
    $scope.previews = [
      {
        title: 'Tyto Ecology',
        imgURL: '../img/tyto_ecology.jpg',
        link: 'http://steamcommunity.com/sharedfiles/filedetails/?id=581632488',
        blockSize: 'col-sm-12',
        desc: 'Create and master your own ecosystem.'
      },
      {
        title: 'Tusk Textventure',
        imgURL: '../img/game1.png',
        link: 'http://byteusgaming.com/Tusk-Textventure',
        blockSize: 'col-sm-6',
        desc: 'Action adventure in 8-bit style.'
      },
      {
        title: 'Hex Clock',
        imgURL: '../img/hexclock.jpg',
        link: 'http://hexclockswag.meteor.com',
        blockSize: 'col-sm-6',
        desc: 'Tell time in style.'
      }
    ];
    $scope.go = function(URL) {
      console.log(URL);
      $window.open(URL, "_blank");
    }
});

app.controller('aboutController', function($scope) {
  $scope.info = [
    {
      title: 'CODE',
      icon: 'fa-code',
      desc: 'Unique projects written completely from scratch.'
    },
    {
      title: 'DESIGN',
      icon: 'fa-paint-brush',
      desc: 'Countless iterations until satisfied.'
    },
    {
      title: 'TEST',
      icon: 'fa-bar-chart',
      desc: 'Results-driven testing to optimize development time and quality.'
    },
    {
      title: 'ADAPT',
      icon: 'fa-bolt',
      desc: 'Quickly learn and adapt modern technologies.'
    }
  ];
});

app.controller('SocialMediaCtrl', function($scope) {
  $scope.showMedia = "";

  // Scoped array of social media info
  // Could use a JSON, too lazy ATM.
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
    name: 'GitHub',
    url: 'https://github.com/Okma/',
    icon: 'fa-github',
    display: 'GitHub'
  }, {
    name: 'Email',
    url: '',
    icon: 'fa-envelope-o',
    display: 'Email: c.amko@ufl.edu'
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
