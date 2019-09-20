$(document).ready(function(){

$('#myModal').click(function (e){
e.preventDefault();

    var username = $(".username").val();
    var password = $(".password").val();

        $.ajax({
            type: 'GET',
            url: "http://localhost:3000/admin",
            dataType: "json",
            contentType: "application/json",
            data: {
                format: 'json'
            },

                success: function(data) {
                    var animal1 = data;
                    for (var i=0; i<animal1.length; i++){
                    if(username === animal1[i].username && password === animal1[i].password){
                        alert('admin login');
                        window.location.assign('file:///C:/Users/UZOR/Desktop/new-zoo/public/zoowork2.html');
                    }
                    }
                }
        })
    })
})