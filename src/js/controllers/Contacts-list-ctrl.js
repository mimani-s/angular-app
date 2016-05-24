/**
 * Contacts List Controller
 */

angular.module('AngularApp')
    .controller('ContactsListCtrl', ['$scope', 'ContactsModel', ContactsListCtrl]);

function ContactsListCtrl($scope, ContactsModel) {

    $scope.initialize = function(){
        $scope.contacts = ContactsModel.getContacts();
    }

}