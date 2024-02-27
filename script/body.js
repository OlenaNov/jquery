
$(document).ready(function() {
        $(this).contents().find(".lesson-2").click(() => {
            $(this).contents().find("#lesson-2").slideToggle(500);
        });

        $(this).contents().find(".lesson-3").click(() => {
            $(this).contents().find("#lesson-3").slideToggle(1000);
        });

        $(this).contents().find(".lesson-4").click(() => {
            $(this).contents().find("#lesson-4").slideToggle(1000);
        });

        $(this).contents().find(".lesson-5").click(() => {
            $(this).contents().find("#lesson-5").slideToggle(1000);
        });


        $(this).contents().find(".lesson-6").click(() => {
            $(this).contents().find("#lesson-6").slideToggle(1000);
        });
});