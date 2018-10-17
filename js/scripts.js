$(document).ready(function(){
  $("#formOne").submit(function(event){
    var streetAddressInput = $("input#streetAddress").val();
    var cityStateInput = $("input#cityState").val();
    var zipCodeInput = $("input#zipCode").val();
    var nameInput = $("input#name").val();
    var messageInput = $("input#message").val();

    $(".streetAddress").text(streetAddressInput);
    $(".cityState").text(cityStateInput);
    $(".zipCode").text(zipCodeInput);
    $(".name").text(nameInput);
    $(".message").text(messageInput);

    $("#postcard").show();

    event.preventDefault();

  });
});
