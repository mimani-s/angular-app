angular.module('AngularApp')
    .directive('prependHttp', function () {

        var directive = {};
        directive.restrict = 'A';

        directive.link = function (scope, element, attrs) {
            function prependHttp(event) {
                if (this.value.length == 0)
                    this.value = "http://";
            }

            element.bind('keypress', prependHttp);
        };
        return directive;
    }
);

