$(document).ready(function() {
	
		$.ajax( {
			url: '/all',
			type: "GET",
			success: function(response) {
				console.log(response);
        for (var i = 0; i< response.data.length; i++) {
          todo = response.data[i];
          $('.list').append('<li id="'+todo.id+'">' + todo.name +"<button type='button' class='del'> del </button></li>");
				};
			}
		});
	

$('#save').click(function() {
 
  var tval=$("#text").val();
  alert(tval);
  if(tval)
  {
    $.ajax( {
 	    url: '/create',
 	    data: {tdata:tval},
 	    type: "GET",
 	    success: function(response) {
 		     console.log(response);
   		   $('.list').append('<li id="'+response.data.id+'">' + response.data.name +"<button type='button' class='del'> del </button></li>");
  		    $("#text").val("");
  	   },
    });
  }
});
  
  $(".del").live("click", function() {
  	$d=$(this).parent("li");
  	var dt= $d.attr("id");
  	$(this).parent().remove();
  	$.ajax( {
  		url: '/delete',
  		data: {rd:dt},
  		type: "GET",
  		success: function(response) {
  			console.log(response.data);	
		}
    });
  });
});