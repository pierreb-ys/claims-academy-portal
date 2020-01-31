
//
function setPublishDate() {

   //If the "Publish" checkbox is checked ... 
   if (document.getElementById("publish-checkbox").checked == true) {

   // ... then the "Publish Date" field needs to be the current Date.
       document.getElementById("publish-date-text").innerHTML = new Date().toLocaleDateString();
   }
 
   // If the "Publish" checkbox is not checked, then the "Publish Date" field needs to look like this:
   else {
       document.getElementById("publish-date-text").innerHTML = "dd/mm/yyyy";
   }

 }

 // 
 //
function enableSubSchool() {

   document.getElementById("my-profile-drop-down-subschool").disabled = false;

   var tempvalue = document.getElementById("my-profile-drop-down-school").value;


}

$("#schools input").on("click", function() {
   alert($(this.attr("id")));
})

// 4-B-Catalog-Curriculum-Detail
/* function disableSubSchools() {

   if (document.getElementById("school0").checked == true) {
   
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

*/