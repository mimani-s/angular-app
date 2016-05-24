'use strict';

/**
 * Route configuration for the AngularApp module.
 */
angular.module('AngularApp').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        // For unmatched routes
        $urlRouterProvider.otherwise('/');

        // Application routes
    }
]);