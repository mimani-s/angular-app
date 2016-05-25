// Directive to show contact
angular.module('AngularApp')
    .directive('appContact', function () {
        return {
            scope: {
                contact: '=appContact'
            },
            restrict:'A',
            templateUrl:'templates/contact.html'
        }
    });
