$(document).ready(function() {
    $("#lesson-7").on('load', function() {
        $(this).contents().find(".button-start").click(() => {
            $(this).contents().find(".quadrato-animato-stop").animate({
                left: '100px',
                top: '100px',
                width: '50px',
                height: '50px',
                opacity: '0.5'
            }, 2000, () => {
                alert("Its Callback!")
            })
            .animate({
                left: '-100px',
                top: '-100px',
                width: '150px',
                height: '150px',
                opacity: '1'
            }, 2000)
            .animate({
                left: '100px',
                top: '100px',
                width: '50px',
                height: '50px',
                opacity: '0.5',
                // transform: 'rotate(360deg)'
            }, 2000)
            .fadeOut(1000);
        });

        $(this).contents().find(".button-stop").click(() => 
            $(this).contents().find(".quadrato-animato-stop").stop()
        );

        $(this).contents().find(".button-stop-all").click(() => {
            $(this).contents().find(".quadrato-animato-stop").stop(true);
        });

        $(this).contents().find(".button-salta-una").click(() => {
            $(this).contents().find(".quadrato-animato-stop").stop(false, true);
        });
    });
});