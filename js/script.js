$(document).ready(function(){
	$('.title').click(function(){
		$("#background01").fadeOut(2000, function(){
			$("#background01").attr('id','background02');
			$(".title").hide();
			$("#background02").fadeIn('slow');
			$(".content").fadeIn(2000);
		});
	});
});