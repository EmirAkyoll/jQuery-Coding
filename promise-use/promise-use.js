$(document).ready(function() {
    // Position the button below the input element
    $("#myButton").position({
      my: "left top",
      at: "left bottom",
      of: "#myInput"
    });
    
    // Prepend a label element to the form and position it to the left of the input element
    $("<label for='myInput'>Type something:</label>").prependTo("form").position({
      my: "right center",
      at: "left center",
      of: "#myInput"
    });
    
    // Update the value of the input element when the button is clicked
    $("#myButton").on("click", function() {
      var inputValue = $("#myInput").val();
      $("#myInput").val(inputValue.toUpperCase());
    });
    
    // Use a promise to handle the button click event
    $("#myButton").on("click", function() {
      var promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
          resolve("Button clicked!");
        }, 2000);
      });
      
      promise.then(function(result) {
        alert(result);
      });
    });
    
    // Select the first element in the form and update its value
    $("form :input:first").val("Hello World!");
  });