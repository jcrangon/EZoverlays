$(document).ready(function() {
	$('#fireoverlay1').click(function(){
		$('#overlay2').fadeOut();
		$('#overlay3').fadeOut();
		$('#overlay4').fadeOut();
		$('#togglecontainer1').fadeIn(700);
		$('#overlay1').fadeIn(700);
	});
	
	$('#fireoverlay2').click(function(){
		$('#overlay1').fadeOut();
		$('#overlay3').fadeOut();
		$('#overlay4').fadeOut();
		$('#togglecontainer1').fadeIn(700);
		$('#overlay2').fadeIn(700);
	});
	
	$('#fireoverlay3').click(function(){
		$('#overlay2').fadeOut();
		$('#overlay1').fadeOut();
		$('#overlay4').fadeOut();
		$('#togglecontainer1').fadeIn(700);
		$('#overlay3').fadeIn(700);
	});
	
	$('#fireoverlay4').click(function(){
		$('#overlay2').fadeOut();
		$('#overlay3').fadeOut();
		$('#overlay1').fadeOut();
		$('#togglecontainer1').fadeIn(700);
		$('#overlay4').fadeIn(700);
	});
	
	$('#closeoverlay').click(function(){
		$('#togglecontainer1').fadeToggle(700);
		$('#overlay1').fadeOut(500);
		$('#overlay2').fadeOut(500);
		$('#overlay3').fadeOut(500);
		$('#overlay4').fadeOut(500);
	});
});