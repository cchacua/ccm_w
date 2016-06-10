'use strict';

/**
 * @ngdoc function
 * @name ccmApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ccmApp
 */
angular.module('ccmApp')
  .controller('AboutCtrl', ['$scope', '$stateParams', function($scope, $stateParams) {

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
      
  }]);
