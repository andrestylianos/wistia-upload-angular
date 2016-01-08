(function() {
  'use strict';

  angular
    .module('processInterviewTest')
    .controller('pitUploadController', pitUploadController);

    /** @ngInject */
    function pitUploadController($scope, $log, $state, $http, $timeout, toastr) {
      var vm = this;

      var apiparam = { api_password: 'cd421960523de4e455e4295c72cbb6f9dd7665f765dd260b8a493c043e69de2a'};

      vm.isUploading = false;
      vm.progress = 0;
      vm.uploadOptions = {
        dataType: 'json',
        url: 'https://upload.wistia.com/',
        formData: apiparam,
        type: 'POST',
        autoUpload: true,
        fileInput: angular.element('input:file'),
        acceptFileTypes: /(\.|\/)(mov|mpg|avi|flv|f4v|mp4|m4v|asf|wmv|vob|mod|3gp|mkv|divx|xvid)$/i
      };

      $scope.$on('fileuploaddone', function(e,data){
        $log.debug('upload done!');
        toastr.info('Please wait while it finishes processing on Wistia', 'Upload finished');
        var id = data.result.hashed_id;
        waitProcessing(id);
      });

      var waitProcessing = function(id){
        $http.get('https://api.wistia.com/v1/medias/'+id+'.json', {params: apiparam})
          .then(function(response){
            if(response.data.status==='ready'){
              $state.go('video',{mediaid: id,ata:'ok'});
            }else{
              $timeout(function(){ waitProcessing(id);},1000);
            }
          })
      };

      $scope.$on('fileuploadsubmit', function(){
        $log.debug('submited file..');
        vm.isUploading = true;
        toastr.info('', 'Upload started');
      });

      $scope.$on('fileuploadprocessfail', function(){
        toastr.error('Was this a valid file format?', 'Upload error');
      });

      $scope.$on('fileuploadadd', function(){
        $log.debug('file added...');
      });

      $scope.$on('fileuploadprogress', function (e, data) {
        vm.progress = parseInt(data.loaded / data.total * 100, 10);
      });
    }
})();
