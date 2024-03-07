$(document).ready(function() {
    $("#lesson-10").on('load', function() {
        $(this).contents().find(".addClass").click(() => {
            $(this).contents().find(".manipolazioneDiClasse").addClass("background");
        });

        $(this).contents().find(".remuveClass").click(() => {
            $(this).contents().find(".manipolazioneDiClasse").removeClass("background");
        });

        $(this).contents().find(".toggleClass").click(() => {
            $(this).contents().find(".manipolazioneDiClasse").toggleClass("background");
        });

        $(this).contents().find(".leggere").click(() => {
            console.log($(this).contents().find(".manipolazioneDiClasse").css("background-color"));;
        });

        $(this).contents().find(".modificare").click(() => {
            $(this).contents().find(".manipolazioneDiClasse").css("color", "blue");
        });
    });
});