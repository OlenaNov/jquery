
$(document).ready(function() {
    $("#lesson-4").on('load', function() {

        $(this).contents().find(".show").click(() => {
            $(this).contents().find(".content").show(1500);
        });

        $(this).contents().find(".hide").click(() => {
            $(this).contents().find(".content").hide(1500);
        });

        $(this).contents().find(".toggle").click(() => {
            $(this).contents().find(".content").toggle(1000);
            $(this).contents().find(".title").toggle(500);
        });
    });
});