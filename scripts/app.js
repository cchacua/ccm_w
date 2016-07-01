'use strict';

/**
 * @ngdoc overview
 * @name ccmApp
 * @description
 * # ccmApp
 *
 * Main module of the application.
 */
angular
  .module('ccmApp', [
    'ngResource',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    
    // Ruta para la página de inicio
    .state('app', {
                url:'/',
                views: {
                    'header': {
                        templateUrl : 'views/header.html',
                    },
                    'content': {
                        templateUrl : 'views/main.html',
                        controller  : 'MainCtrl'
                    },
                    'footer': {
                        templateUrl : 'views/footer.html',
                    }
                }

    })
    
    
    
    // Ruta para la página de visualizaciones
    .state('app.views', {
                url:'views',
                views: {
                    'content@': {
                        templateUrl : 'views/views.html',
                        controller  : 'ViewsCtrl'                  
                    }
                }
    })
    
    // Ruta para la página de visualizaciones house and class
    .state('app.views.houseandclass', {
                url:'views/houseandclass',
                views: {
                    'content@': {
                        templateUrl : 'views/gviews/houseandclass.html',
                        controller  : 'ViewsCtrl'                  
                    }
                }
    })
    
    // Ruta para la página de visualizaciones consumptionbyclass.html
    .state('app.views.consumptionbyclass', {
                url:'views/consumptionbyclass.html',
                views: {
                    'content@': {
                        templateUrl : 'views/gviews/consumptionbyclass.html',
                        controller  : 'ViewsCtrl'                  
                    }
                }
    })
/*****************************FIN VISUALIZACIONES***************************/

    // Ruta para la página de Acerca de
    .state('app.aboutus', {
                url:'aboutus',
                views: {
                    'content@': {
                        templateUrl : 'views/about.html',
                        controller  : 'AboutCtrl'                  
                    }
                }
    });

    $urlRouterProvider.otherwise('/');
    
  });
