
$(document).ready(function() {
    $("#lesson-3").on('load', function() {

        $(this).contents().find("button").click(() => {
            $(this).contents().find("button").text("I'm clicked!").css("color", "green")
        });

        $(this).contents().find(".quadrato").on({
            mouseenter: () => {
                $(this).contents().find(".quadrato").css("background-color", "darkcyan")
            },

            mouseleave: () => {
                $(this).contents().find(".quadrato").css("background-color", "aqua");
            }
        });

        $(this).contents().find("input").on({
            focus: () => {
                $(this).contents().find("input").css({"border-radius": "8px", "border": "2px solid blue"})
            },

            blur: () => {
                $(this).contents().find("input").css({"border-radius": "16px", "border": "2px solid green"})
            },

            change: () => {
                $(this).contents().find("input").css("color", "green")
            }
        });

        $(this).contents().keypress(() => {
            $(this).contents().find(".wrapper").css("background-color", "bisque");
        });
    })
});