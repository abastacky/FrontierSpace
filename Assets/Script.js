$(document).ready(function(){

$('#yellow').on("click",function(){
	$('#yellowtext').toggle();
});	

$('#cyan').on("click",function(){
	$('.images').toggle();
});	

$('#magenta').on("click",function(){
	$('.map').toggle();
});	

    $( function() {
    	$( ".images img" ).draggable();
 	} );

	});