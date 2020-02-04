
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
 

selectList = function(id){
   var str = " ";
   $("#"+id+" input:checked").each(function() {
               var val = $(this).next('label').text();   
           console.log(val); 
           str += "<label><span>" + val + "</span><i class='delete'></i></label>";
       })
   $( "#select-"+id+"" ).html( str );
} 
   selectList('schools');
   selectList('subSchools');
   selectList('phases');

$('#schools input ').click(function(){
   selectList('schools');
}) 
$(' #subSchools input ').click(function(){
   selectList('subSchools');
}) 
$('#phases input').click(function(){
   selectList('phases');
}) 

deleteSelectedList = function(id){
$('#select-'+id+'  label .delete').click(function() {  
       $(this).closest('label').remove();  
       txt = $(this).closest('label').find('span').text()  
      $( "#"+id+"   label:contains('"+txt+"')").prev('input').prop('checked',false)
   });
}


$("html").mouseover(function(){
deleteSelectedList('schools');
deleteSelectedList('subSchools');
deleteSelectedList('phases');
});

disableSubSchools = function(){
 
 if($('#school0').prop('checked')){    
   $('#phases input[type="checkbox"], #subSchools input[type="checkbox"]').prop('disabled',true).prop('checked',false)
    $("#select-subSchools, #select-phases").html('') 
    $("#schools input").each(function(e){ 
       if($('#school0').prop('checked')){
           if(e == 0){ 
               $(this).prop('checked',true)
               }else{ 
                   $(this).prop('checked',false).prop('disabled',true)
           }
       }  
   })
   $('#select-schools').html('<label><span>All Schools</span><i class="delete"></i></label>') 
 }else{ 
   $("#schools input").each(function(e){    
                   $(this).prop('checked',false).prop('disabled',false)  
   })
   $('#phases input[type="checkbox"]').prop('disabled',false)
   $('#subSchools input[type="checkbox"]').prop('disabled',false)
 }

}