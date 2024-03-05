
$(document).ready(function() {
    $("#lesson-8").on('load', function() {
        $(this).contents().find(".start").click(() => {
            console.log($(this).contents().find(".contenuto").text());
            console.log($(this).contents().find(".contenuto").html());
            console.log($(this).contents().find(".val").val());
            console.log($(this).contents().find(".val").attr("data-val"));
            console.log($(this).contents().find(".attr").attr("href"));
        });

        $(this).contents().find(".val").change(() => {
            console.log($(this).contents().find(".val").val());
        }).keyup(() => {
            console.log("input", $(this).contents().find(".val").val());
        });

        $(this).contents().find(".change").click(() => {
            $(this).contents().find(".for-change-text").text("I'ts changed 🥳!");
            $(this).contents().find(".for-change-html").html("I'ts <strong>really</strong> changed 🤪!");
            $(this).contents().find(".val").val("I'm changed😎!");
            $(this).contents().find(".attr").attr("href", "https://facebook.com").text("Facebook");
        });
    });
});