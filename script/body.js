
// $(document).ready(function() {
//     function handleLessonsList(lessonNumber) {
//             $(this).contents().find(`#lesson-${lessonNumber}`).slideToggle(1000);
//         };

//     $(this).contents().find(".lesson").click(function() {
//        console.log("lessonNumber");
//         let lessonNumber = $(this).data("lesson");
//        handleLessonsList(lessonNumber);
//     });
// });


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

        $(this).contents().find(".lesson-7").click(() => {
            $(this).contents().find("#lesson-7").slideToggle(1000);
        });

        $(this).contents().find(".lesson-8").click(() => {
            $(this).contents().find("#lesson-8").slideToggle(1000);
        });

        $(this).contents().find(".lesson-9").click(() => {
            $(this).contents().find("#lesson-9").slideToggle(1000);
        });

        $(this).contents().find(".lesson-10").click(() => {
            $(this).contents().find("#lesson-10").slideToggle(1000);
        });

        $(this).contents().find(".lesson-11").click(() => {
            $(this).contents().find("#lesson-11").slideToggle(1000);
        });

        $(this).contents().find(".lesson-12").click(() => {
            $(this).contents().find("#lesson-12").slideToggle(1000);
        });
});