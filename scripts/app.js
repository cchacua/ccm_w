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
