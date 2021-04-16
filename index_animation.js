let cookie = document.cookie;
if (cookie.indexOf('visited=', 0) == -1) {
    let expiration = new Date();
    expiration.setDate(expiration.getDate()+1);
    document.cookie = 'visited=1;expires=' + expiration + ';path=/';

	$(document).ready(function() {              // changed the background to display the about div once the alert given.
	   $("#house").addClass("logomoving"); 
	   $(".clouds").hide();
	   $(".container").hide();
	   $(".name").hide().show(2100);
	   $(".section").hide().show(2100);
	   $(".clouds").hide();
	   $(".container").delay(2000).fadeIn(2500);
	   $(".clouds").fadeIn(4000);
 });
} else {
	$("#house").addClass("logohome");
}