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

       $('#deletebtn').click(function(event){
        event.preventDefault();    
        var id = $("#inputid").val();    
      
       $.ajax({
          type: 'DELETE',
          url: "http://localhost:3000/addanimal/"+id,
          dataType: "json",
          contentType: "application/json",

          success:function(newData){     

            alert('deleted');
          }
         
              })
                
          })

          $('#submitadd1').click(function(event){
            event.preventDefault();
            var idd = $("#inputid1").val();
           var add = {
               "animalname" : $('#animalname1').val(),
               "petname" : $('#petname1').val(),
               "specie" : $('#animalspecie1').val(),
               "imgurl" :$('#animalurl1').val(),
               "condition" : $('#animalcondition1').val(),
               "details" : $('#animaldetails1').val()
           };
       
           console.log(add);
           
          
           $.ajax({
              type: 'PUT',
              url: "http://localhost:3000/addanimal/"+idd,
              dataType: "json",
              contentType: "application/json",
              data: JSON.stringify(add),
          
                  success:function(newData){     
       
                        alert('updated');
                      }
                  })
                    
              })

    })