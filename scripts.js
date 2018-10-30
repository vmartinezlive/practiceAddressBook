//Business Logic for AddressBook
function AddressBook() {
this.contacts = []
this.currentId = 0
}
//this will add function - it an contact object as an agrument.
AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();
  this.contacts.push(contact);
}
AddressBook.prototype.assignId = function() {
  this.currentId += 1
  return this.currentId
}

AddressBook.prototype.findContact = function(id)  {
    if this.contacts[id + 1] {
      return this.contacts[id + 1]
    } else {
       return false
  }
}

AddressBook.prototype.deleteContact = function(id) {
  for (var i=0; i< this.contacts.length; i ++) {
    if (this.cotacts[i]) {
     if (this.contacts[i].id === id) {
       delete this.contacts[i];
       return true;
   }
  }
 };
  return false;
}

 //Business Logic for Contacts
 function Contact(firstName, lastName, phoneNumber)  {
   this.firstName = firstName,
   this.lastName = lastName,
   this.phoneNumber = phoneNumber
 }

 Contat.prototype.fullName = function() {
   retun this.firstName + " " + this.lastName;
 }


 //User Interface Logic
 var adressBook = new AddressBook();

function displayContactDetails(addressBookToDisplay) {
  var contactsList = $("ul#contacts");
  var htmlForContactInfo = "";
  addressBookToDisplay.contacts.forEach(function(contact) {
    htmlForContactInfo += "<li id=" + contact.id + ">" + contact.firstName + " " + contact.lastName +"</li>";
  });
  contactsList.html(htmlForContactInfo);
};


$(document).ready(function() {
  $("form#new-contact").submit(function(even) {
    event.preventDefault();
    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedPhoneNumber = $("input#new-phone-number").val();
    var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber);
    addressBook.addContact(newContact);
    displayContactDetails(addressBook);
  })
})
