$(document).ready(function() {
    $("#lesson-6").on('load', function() {
        $(this).contents().find(".button-per-animare").click(() => {
            $(this).contents().find(".quadrato-animato").animate({
                left: '100px',
                top: '100px',
                width: '50px',
                height: '50px',
                opacity: '0.5'
            }, 2000);

            $(this).contents().find(".quadrato-animato").animate({
                left: '-100px',
                top: '-100px',
                width: '150px',
                height: '150px',
                opacity: '1'
            }, 2000);

            $(this).contents().find(".quadrato-animato").animate({
                left: '100px',
                top: '100px',
                width: '50px',
                height: '50px',
                opacity: '0.5',
                // transform: 'rotate(360deg)'
            }, 2000);
        })
    });
});