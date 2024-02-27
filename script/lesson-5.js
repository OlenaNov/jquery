
$(document).ready(function() {
    $("#lesson-5").on('load', function() {

        $(this).contents().find(".show").click(() => {
            $(this).contents().find(".content").fadeIn(1000);
        });

        $(this).contents().find(".hide").click(() => {
            $(this).contents().find(".content").fadeOut(1000);
        });

        $(this).contents().find(".toggle").click(() => {
            $(this).contents().find(".content").fadeToggle(1000);
        });

        $(this).contents().find(".hide").click(() => {
            $(this).contents().find(".content-3").fadeTo(1000, 0.5);
        });

        $(this).contents().find(".show").click(() => {
            $(this).contents().find(".content-5").slideDown(1000);
        });

        $(this).contents().find(".hide").click(() => {
            $(this).contents().find(".content-5").slideUp(1000);
        });

        $(this).contents().find(".toggle").click(() => {
            $(this).contents().find(".content-5").slideToggle(1000);
        });

    });
});

  