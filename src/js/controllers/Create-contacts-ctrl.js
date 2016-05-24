/**
 * Contacts Create Controller
 */

angular.module('AngularApp')
    .controller('CreateContactsCtrl', ['$scope', 'ContactsModel','$location', '$state', CreateContactsCtrl]);

function CreateContactsCtrl($scope, ContactsModel, $location, $state) {

    var self = this;

    $scope.initialize = function(){
        $scope.contact = {}
    };

    self.createContact = function(){
        $scope.contacts = ContactsModel.addToContacts($scope.contact);
        //$location.path('/');
        //You can pass params as well
        $state.go('index', { });
    }

}