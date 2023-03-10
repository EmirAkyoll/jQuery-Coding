$(document).ready(function() {
    $("#change").click(function() {
        $("#para").attr("class", "new-class").text("Paragraph has been changed!");
    });

    $("#clear").click(function() {
        $("#para").empty();
    });

    $("#clone").click(function() {
        $("#para").clone().appendTo("#cocuklar");
    });

    // $("#cocuklar").children().click(function() {
    //     $(this).toggleClass("btn-selected");
    // });

    $(".btn").click(function() {
        $(this).clearQueue().animate({opacity: 0.5}, 500).animate({opacity: 1}, 500);
    });
});