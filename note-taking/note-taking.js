$(document).ready(function() {

  // form submit event handler
  $('form').submit(function(event) {
    event.preventDefault(); // prevent page reload

    // get note text and create list item
    var noteText = $('#note').val();
    var listItem = $('<li>').text(noteText);

    // create edit button and add to list item
    var editButton = $('<button>').text('Edit');
    editButton.click(function() {
      var editText = prompt('Edit your note:', noteText);
      if (editText) {
        listItem.text(editText);
        noteText = editText;
      }
    });
    listItem.append(editButton);

    // create delete button and add to list item
    var deleteButton = $('<button>').text('Delete');
    deleteButton.click(function() {
      listItem.remove();
    });
    listItem.append(deleteButton);

    // add list item to note list
    $('#notes').append(listItem);

    // clear input field
    $('#note').val('');
  });

});