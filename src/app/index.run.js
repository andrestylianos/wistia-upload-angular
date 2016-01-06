(function() {
  'use strict';

  angular
    .module('processInterviewTest')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
