// BUSINESS LOGIC
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
}

// USER LOGIC
$(document).ready(function() {
  $("form#newContact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#newFirstName").val();
    var inputtedLastName = $("input#newLastName").val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + "</span></li>");

    $("input#newFirstName").val("");
    $("input#newLastName").val("");

  });
});
