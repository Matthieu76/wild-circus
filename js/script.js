$(document).ready(function(){
	$('.title').click(function(){
		$("#background01").fadeOut(2000, function(){
			$("#background01").attr('id','background02');
			$(".title").hide();
			$("#background02").fadeIn('slow');
			$(".content").fadeIn(2000);
		});
	});

	$('#shows').click(function(){
		$("#background01").fadeOut(2000, function(){
			$("#background01").attr('id','background02');
			$("li:first").removeClass("active");
			$("ul li:nth-child(2)").addClass("active");
			$(".title").hide();
			$("#background02").fadeIn('slow');
			$(".content").fadeIn(2000);
		});
	});

});