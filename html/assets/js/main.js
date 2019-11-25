$(function () {
    $('.chosen').chosen();
});

$(function () {
    $('#summernote').summernote();
});

$(function () {


    jQuery('#datetimepicker').datetimepicker({
        format:'d.m.Y H:i',
        lang:'ru'
    });

    jQuery('#image_button').click(function(){
        jQuery('#datetimepicker').datetimepicker('show'); //support hide,show and destroy command
    });

});

//$(document).ready(function() {
//    $("#summernote").summernote();
//});
