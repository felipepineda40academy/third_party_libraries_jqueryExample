
$("#download-button").click(function(e) {
    
    $("#exampleModal").modal("show");

})

$("#size_button").click(function(e) {
    $("#header_color_change").css("color","#009688");
})

$("#server_button").click(function(e) {
    
    body_to_send={
        message:'Hola este es otro mensaje'
    }
    var obj = {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body_to_send)
      };
    fetch("https://webhook.site/0d6602c2-b512-4b97-af7f-1d959e49b146",obj);
})


