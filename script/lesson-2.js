
$(document).ready(function() {
    $("#lesson-2").on('load', function() {
        $(this).contents().find("p.super").css("color", "blue");
    });
});
