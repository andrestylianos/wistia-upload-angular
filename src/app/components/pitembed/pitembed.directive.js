(function() {
  'use strict';

  angular
    .module('processInterviewTest')
    .directive('pitEmbed', pitEmbed);

  /** @ngInject */
  function pitEmbed($stateParams) {
    var directive = {
      restrict: 'E',
      template: function(){
        return '<iframe src="http://fast.wistia.net/embed/iframe/'+$stateParams.mediaid+'" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" width="640" height="360"></iframe>'
      }
    };
    return directive;
  }
})();
