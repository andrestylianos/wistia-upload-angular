(function() {
  'use strict';

  angular
    .module('processInterviewTest')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, $scope, toastr) {

    $scope.showToastr = showToastr;

    $scope.uploadOptions = function(){
      dataType: 'json',
      url: 'https://upload.wistia.com/',
      done: function(e, data){

      }
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }
  }
})();
