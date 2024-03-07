$(document).ready(function() { 
    $("#lesson-11").on('load', function() {
        $(this).contents().find(".current").click(() => {
            $(this).contents().find(".current").prepend("Current LI - Current </br>");
            $(this).contents().find(".current").parent().prepend("UL - 👩🏼‍⚖️🧑🏻‍⚖️ Parent").css({"border": "2px solid crimson", "color": "crimson", "background-color": "coral"});
            $(this).contents().find(".current").parent().parent().prepend("DIV - 👵🏻👴🏻 Ancestor").css({"border": "2px solid brown", "color": "brown", "background-color": "burlywood"});
            $(this).contents().find(".current").children().prepend("P - 👶🏻👧🏻 Children").css({"border": "2px solid green", "color": "green", "background-color": "chartreuse"});
            $(this).contents().find(".current").siblings().prepend("LI - 👦🏻👩🏻 Siblings").css({"border": "2px solid blue", "color": "blue", "background-color": "cornflowerblue"});
            $(this).contents().find(".current").next().prepend("NEXT ");
            $(this).contents().find(".current").prev().prepend("PREV ");
        });
    });
});