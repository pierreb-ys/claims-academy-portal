$(function () {
 //  $('.chosen').chosen();
});

$(function () {
//    $('#summernote').summernote();
});

$(function () {


 //   jQuery('#datetimepicker').datetimepicker({
 //       format:'d.m.Y H:i',
 //       lang:'ru'
 //   });

    jQuery('#image_button').click(function(){
 //       jQuery('#datetimepicker').datetimepicker('show'); //support hide,show and destroy command
    });

});

//$(document).ready(function() {
//    $("#summernote").summernote();
//});

function setPublishDate() {

   if (document.getElementById("publish-checkbox").checked == true) {
     document.getElementById("publish-date-text").innerHTML = new Date().toLocaleDateString();
   }
 
   else {
       document.getElementById("publish-date-text").innerHTML = "dd/mm/yyyy";
   }
 }
