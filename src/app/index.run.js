(function() {
  'use strict';

  angular
    .module('enoba')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
