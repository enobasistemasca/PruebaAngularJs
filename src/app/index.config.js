(function() {
  'use strict';

  angular
    .module('pruebaangularjs')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
  }

})();
