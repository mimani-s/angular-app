/**
 * Contacts Create Controller
 */

angular.module('AngularApp')
    .controller('CreateContactsCtrl', ['$scope', 'ContactsModel', CreateContactsCtrl]);

function CreateContactsCtrl($scope, ContactsModel) {

    var self = this;

    $scope.initialize = function(){
        $scope.contact = {}
    };

    self.createContact = function(){
        $scope.contacts = ContactsModel.addToContacts($scope.contact);
    }

}