$(document).ready(function() {
    // Detach paragraph function
    $("#detach-btn").click(function() {
        $("#para").detach();
    });

    // Load content using AJAX
    $("#ajax-btn").click(function() {
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/posts/1",
            method: "GET",
            success: function(data) {
                $("#content").text(data.title);
            },
            error: function() {
                alert("Error loading content.");
            }
        });
    });

    // Dequeue animations function
    $("#dequeue-btn").click(function() {
        $(".btn").dequeue();
    });

    // Find closest parent function
    $("#closest-btn").click(function() {
        $("#menu a").closest("li").css("background-color", "yellow");
    });

    // Disable right-click context menu on menu
    $("#menu").on("contextmenu", function() {
        return false;
    });

    // Add a click event to menu items
    $("#menu li a").click(function() {
        alert("You clicked on " + $(this).text());
    });

    // Check if container has a certain class
    if ($(".container").has("#content")) {
        alert("Container has content.");
    }
});