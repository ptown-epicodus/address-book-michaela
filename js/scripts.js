// BUSINESS LOGIC
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
}

Contact.prototype.fullName = function () {
  return this.firstName + " " + this.lastName
};

// USER LOGIC
$(document).ready(function() {
  $("form#newContact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#newFirstName").val();
    var inputtedLastName = $("input#newLastName").val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + "</span></li>");

    $(".contact").last().click(function() {
      $("#showContact").show();
      $("#showContact h2").text(newContact.firstName);
      $(".firstName").text(newContact.firstName);
      $(".lastName").text(newContact.lastName);
    });

    $("input#newFirstName").val("");
    $("input#newLastName").val("");

  });
});
