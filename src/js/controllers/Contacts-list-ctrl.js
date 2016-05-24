/**
 * Contacts List Controller
 */

angular.module('AngularApp')
    .controller('ContactsListCtrl', ['$scope', '$cookieStore', ContactsListCtrl]);

function ContactsListCtrl($scope, $cookieStore) {

    $scope.contacts = [
        {
            firstName: 'Saurabh',
            lastName: 'Mimani',
            phone: 9343459079,
            email: 'saurabh.mimani@flipkart.com'
        },
        {
            firstName: 'Pradhuman',
            lastName: 'Jhala',
            phone: 9342345894,
            email: 'pradhuman@flipkart.com'
        },
        {
            firstName: 'Suresh',
            lastName: 'Kumar',
            phone: 9234589432,
            email: 'suresh@flipkart.com'
        },
    ]

}