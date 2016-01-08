(function() {
  'use strict';

  angular
    .module('processInterviewTest')
    .directive('pitUpload', pitUpload);

  /** @ngInject */
  function pitUpload() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/pitupload/pitupload.html',
      controller: 'pitUploadController',
      controllerAs: 'vm'
    };

    return directive;
  }

})();
