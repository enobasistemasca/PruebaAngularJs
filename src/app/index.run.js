(function() {
  'use strict';

  angular
    .module('pruebaangularjs')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
