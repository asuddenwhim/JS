function scrollTitle(){
		var msg = document.title;
		var msg = msg.substring(1, msg.length);
		document.title = msg;
		setTimeout("scrollTitle()", 200);
	}
$(document).ready(function(){
	var msg = "~six mois!!~MANASA&SADISH";
	document.title = msg;
	scrollTitle();	
});
