$(document).ready(function() {
    $("#lesson-12").on('load', function() {
        $(this).contents().find(".for-load-txt").load("for-load.txt");
        
        $(this).contents().find(".get-json").click(() => {
            // $.getJSON("for-load.json", data => {
        //         console.log(data);
        //     });

            // $.ajax({
            //     url: "for-load.json",
            //     type: "post",
            //     data: $(this).serialize(),
            //     success: response => console.log(response),
            //     error: (jqXHR, textStatus, errorThrown) => console.log(textStatus, errorThrown)
            // });

            $.ajax({
                url: "for-load.json",
                dataType: "json",
                type: "get",
                data: $(this).serialize(),
                success: res => console.log(res),
                error: (jqXHR, textStatus, errorThrown) => console.log(textStatus, errorThrown)
            });
        });
    });

});