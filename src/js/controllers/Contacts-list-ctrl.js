/**
 * Contacts List Controller
 */

angular.module('AngularApp')
    .controller('ContactsListCtrl', ['$scope', '$rootScope', 'ContactsModel', ContactsListCtrl]);

function ContactsListCtrl($scope, $rootScope, ContactsModel) {

    $scope.initialize = function(){
        $scope.contacts = ContactsModel.getContacts();
        $scope.search = {};
    }

    $scope.selectContact = function(contact){
        $rootScope.contact = contact;
    }

}