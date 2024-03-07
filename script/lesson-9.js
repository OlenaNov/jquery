$(document).ready(function() {
    $("#lesson-9").on('load', function() {

        $(this).contents().find(".append").click(() => {
            $(this).contents().find(".manipolare").append(" <strong>Append</strong>");
        });

        $(this).contents().find(".prepend").click(() => {
            $(this).contents().find(".manipolare").prepend("<strong>Prepend</strong> ");
        });

        $(this).contents().find(".after").click(() => {
            $(this).contents().find(".manipolare").after("<strong>After</strong>");
        });

        $(this).contents().find(".before").click(() => {
            $(this).contents().find(".manipolare").before("<strong>Before</strong>");
        });


        $(this).contents().find(".remuve").click(() => {
            $(this).contents().find(".eliminare").remove();
        });

        $(this).contents().find(".empty").click(() => {
            $(this).contents().find(".svuotare").empty();
        });

    });
});