(function() {
  'use strict';

  angular
    .module('processInterviewTest')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html'
      })
      .state('video', {
        url: '/video',
        templateUrl: 'app/components/pitembed/pitembed.html',
        params: {mediaid:null,
                  ata:null  }
      });

    $urlRouterProvider.otherwise('/');
  }

})();
