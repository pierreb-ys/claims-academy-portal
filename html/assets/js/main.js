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

//
function setPublishDate() {

   if (document.getElementById("publish-checkbox").checked == true) {
     document.getElementById("publish-date-text").innerHTML = new Date().toLocaleDateString();
   }
 
   else {
       document.getElementById("publish-date-text").innerHTML = "dd/mm/yyyy";
   }
 }

function enableSubSchool() {

   document.getElementById("my-profile-drop-down-subschool").disabled = false;

   var tempvalue = document.getElementById("my-profile-drop-down-school").value;


}



// 4-B-Catalog-Curriculum-Detail
function disableSubSchools() {

  // var schools = document.getElementById("schools");


   if (document.getElementById("school0").checked == true) {
 //  if (document.getElementById("school0").checked == true || $("#schools input:checkbox:checked").length > 1) {
   
      document.getElementById("subSchool0").disabled = true;
      document.getElementById("subSchool1").disabled = true;
      document.getElementById("subSchool2").disabled = true;
      document.getElementById("subSchool3").disabled = true;
      document.getElementById("subSchool4").disabled = true;
      document.getElementById("subSchool5").disabled = true;
      document.getElementById("subSchool6").disabled = true;
      document.getElementById("subSchool7").disabled = true;
      document.getElementById("subSchool8").disabled = true;

   }

   else if (document.getElementById("school0").checked == false) {

      document.getElementById("subSchool0").disabled = false;
      document.getElementById("subSchool1").disabled = false;
      document.getElementById("subSchool2").disabled = false;
      document.getElementById("subSchool3").disabled = false;
      document.getElementById("subSchool4").disabled = false;
      document.getElementById("subSchool5").disabled = false;
      document.getElementById("subSchool6").disabled = false;
      document.getElementById("subSchool7").disabled = false;
      document.getElementById("subSchool8").disabled = false;

    //  if ($("#schools input:checkbox:checked").length > 1) 

   }

   else if ($("#schools input:checkbox:checked").length > 1) {

      document.getElementById("subSchool0").disabled = false;
      document.getElementById("subSchool1").disabled = false;
      document.getElementById("subSchool2").disabled = false;
      document.getElementById("subSchool3").disabled = false;
      document.getElementById("subSchool4").disabled = false;
      document.getElementById("subSchool5").disabled = false;
      document.getElementById("subSchool6").disabled = false;
      document.getElementById("subSchool7").disabled = false;
      document.getElementById("subSchool8").disabled = false;
   
   }

}