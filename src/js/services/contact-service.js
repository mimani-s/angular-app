angular.module('AngularApp')
    .service('ContactsModel', ContactsModel);


function ContactsModel() {
    var service = this;
    var contacts = [
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
    ];

    service.getContacts = function () {
        return contacts;
    };

    service.addToContacts = function (contact) {
        contacts.push(contact);
    };
};