$('#myModal').submit(function (e){
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
                    if(username == 'chukwunedum' && password == 'Tehillah'){
                        alert('admin Login');
                        window.location.assign('file:///C:/Users/UZOR/Desktop/new-zoo/public/zoowork2.html');
                    }else{
                        alert('incorrect credentials...Please try again')
                    }
                }
        })
    })