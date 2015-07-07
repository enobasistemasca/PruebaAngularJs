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
      .when('/edit/:id', {
        templateUrl: '../app/edit/edit.html',
        controller: 'EditController',
        controllerAs: 'edit'
      })
      .when('/profile', {
        templateUrl: 'app/profile/profile.html',
        controller: 'ProfileController',
        controllerAs: 'profile'
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
