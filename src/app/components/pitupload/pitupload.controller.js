(function() {
  'use strict';

  angular
    .module('processInterviewTest')
    .controller('pitUploadController', pitUploadController);

    /** @ngInject */
    function pitUploadController($scope, $log) {
      var vm = this;

      vm.uploadOptions = {
        dataType: 'json',
        url: 'https://upload.wistia.com/',
        formData: { api_password: 'cd421960523de4e455e4295c72cbb6f9dd7665f765dd260b8a493c043e69de2a'},
        type: 'POST',
        autoUpload: false,
        fileInput: angular.element('input:file'),
        acceptFileTypes: /(\.|\/)(mov|mpg|avi|flv|f4v|mp4|m4v|asf|wmv|vob|mod|3gp|mkv|divx|xvid)$/i
      };

      $scope.$on('fileuploadstop', function(){
        $log.debug('done!');
      });

      $scope.$on('fileuploadsubmit', function(){
        $log.debug('submit!');
      });

      $scope.$on('fileuploadadd', function(){
        $log.debug('file added');
      });
    }
})();
