
$(document).ready(function() {
        $(this).contents().find(".lesson-2").click(() => {
            $(this).contents().find("#lesson-2").toggle(500);
        });

        $(this).contents().find(".lesson-3").click(() => {
            $(this).contents().find("#lesson-3").toggle(500);
        });

        $(this).contents().find(".lesson-4").click(() => {
            $(this).contents().find("#lesson-4").toggle(500);
        });
});