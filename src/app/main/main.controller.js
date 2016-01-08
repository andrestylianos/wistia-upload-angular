(function() {
  'use strict';

  angular
    .module('processInterviewTest')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, $scope, toastr) {

    var vm = this;

    vm.showToastr = showToastr;


    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
    }
  }
})();
