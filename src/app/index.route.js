(function() {
  'use strict';

  angular
    .module('pruebaangularjs')
    .config(routeConfig);

  function routeConfig($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/login/login.html',
        controller: 'LoginController',
        controllerAs: 'login'
      })
      .when('/main', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/home', {
        templateUrl: 'app/home/home.html',
        controller: 'HomeController',
        controllerAs: 'home'
      })
      .when('/add', {
        templateUrl: 'app/add/add.html',
        controller: 'AddController',
        controllerAs: 'add'
      })
      .when('/profiles', {
        templateUrl: 'app/profile/profiles.html',
        controller: 'ProfileController',
        controllerAs: 'profile'
      })
      .when('/profile', {
        templateUrl: 'app/profile/profile.html',
        controller: 'ProfileController',
        controllerAs: 'profile'
      })
      .when('/profileAdd', {
        templateUrl: 'app/profile/profile_add.html',
        controller: 'ProfileController',
        controllerAs: 'profiler'
      })
      .otherwise({
        redirectTo: '/'
      });

      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
     });
  } // end function



})();
