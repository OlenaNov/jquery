
$(document).ready(function() {

    function handleLessonsList(lessonNumber) {
        console.log(`#lesson-${lessonNumber}`);
        $(`#lesson-${lessonNumber}`).slideToggle(1000);

        };

    $(".lesson").click(function() {
        let lessonNumber = $(this).data("lesson");
       handleLessonsList(lessonNumber);
    });
});