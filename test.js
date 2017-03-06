$( document ).ready(function() {

    //AJAX Call


    var values =   "sam";

    $.ajax({
        url: "service.php",
        type: "post",
        data: {'name':values} ,
        success: function (response) {

            alert(response.toString());

        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        }


    });



});