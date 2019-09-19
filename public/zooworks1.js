$(document).ready(function(){
    // $.get("http://localhost:3000/addanimal", function(data){
    //     // console.log(data);
    // })
    $.ajax({
        type: 'GET',
        url: "http://localhost:3000/addanimal",
        dataType: "json",
        contentType: "application/json",
        data: {
            format: 'json'
        },

            success:function(data){
                
                $('#search').click(function(event){
                    event.preventDefault();
                    var inputText=$('#inputText').val();
                    var animals=data;
                    var output = '';
                        for (var i=0; i<animals.length; i++){
                            if(inputText.toLowerCase()===animals[i].animalname.toLowerCase()){
                                console.log('working')
                                $('#showanimals').append('<div><img src= '+animals[i].imgurl+'></div>');
                                $('#animaldetails').append('<h5> Animal Name: ' + animals[i].animalname+'</h5>');
                                $('#animaldetails').append('<h5> Specie: ' + animals[i].specie+'</h5>');
                                $('#animaldetails').append('<h5> Pet Name: ' + animals[i].petname+'</h5>');
                                $('#animaldetails').append('<h5> Condition: ' + animals[i].condition+'</h5>');
                                $('#animaldetails').append('<h5> Details: ' + animals[i].details+'</h5>');
                            }
                        }

                })
            }
 })

})