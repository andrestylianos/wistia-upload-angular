(function() {
  'use strict';

  angular
    .module('processInterviewTest')
    .controller('pitUploadController', pitUploadController);

  /** @ngInject */
  function pitUploadController($timeout, $scope, toastr) {

    $scope.showToastr = showToastr;

    $scope.uploadOptions = function(){
      dataType: 'json',
      type: 'POST',
      url: 'https://upload.wistia.com/',
      formData: { api_password: 'cd421960523de4e455e4295c72cbb6f9dd7665f765dd260b8a493c043e69de2a'},
      acceptFileTypes: "/(\.|\/)(mov|mpg|avi|flv|f4v|mp4|m4v|asf|wmv|vob|mod|3gp|mkv|divx|xvid)$/i"
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }
  }
})();
