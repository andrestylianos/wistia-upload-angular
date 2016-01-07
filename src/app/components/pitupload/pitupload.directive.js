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
      controller: pitUploadController,
      bindToController: true
    };

    return directive;

//    /** @ngInject */
    // function NavbarController(moment) {
    //   var vm = this;
    //
    //   // "vm.creation" is avaible by directive option "bindToController: true"
    //   vm.relativeDate = moment(vm.creationDate).fromNow();
    // }
  }

})();
