'use strict';

/**
 * @ngdoc function
 * @name ccmApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ccmApp
 */
angular.module('ccmApp')
  .controller('ViewsCtrl',['$scope', '$stateParams',  function ($scope, $stateParams) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);