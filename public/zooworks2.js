$(document).ready(function(){

 $('#submitadd').click(function(event){
     event.preventDefault();
    var add = {
        "animalname" : $('#animalname').val(),
        "petname" : $('#petname').val(),
        "specie" : $('#animalspecie').val(),
        "imgurl" :$('#animalurl').val(),
        "condition" : $('#animalcondition').val(),
        "details" : $('#animaldetails').val()
    };

    console.log(add);
    
   
    $.ajax({
       type: 'POST',
       url: "http://localhost:3000/addanimal",
       dataType: "json",
       contentType: "application/json",
       data: JSON.stringify(add),
   
           success:function(newData){     

                 alert('working');
               }
           })
             
       })
    })