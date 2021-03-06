function toggle_subscribe(sub,imageid,o) {
	if(sub == "subscribe") {
		o.html("unsubscribe");
		o.attr({
			"title": "take this file off my 'unread comments' watch list.",
			"href":  "/offensive/subscribe.php?fileid=" + imageid + "&un=1"
		});
	
	} else {
		o.html("subscribe");
		o.attr({
			"title": "watch this thread for new comments.",
			"href":  "/offensive/subscribe.php?fileid=" + imageid
		});
	}
}

function handle_subscribe(o,e, imageid) {
	e.preventDefault();
	var sub = o.html();
	
	function twiddle() {
		toggle_subscribe(sub, imageid, o);
	}

	// remove the href to prevent doubleclicks
	o.removeAttr("href");
	if(sub == "subscribe") {
		$.get("/offensive/api.php/subscribe.php", { threadid: imageid, subscribe: 1 }, twiddle);
	} else {
		$.get("/offensive/api.php/subscribe.php", { threadid: imageid, subscribe: 0 }, twiddle);
	}
}

$(document).ready(function() {
	$("#subscribeLink").click(function(e) {
		handle_subscribe($(this),e,$("#fileid").attr("value"));
	});
	$("#unsubscribeLink").click(function(e) {
		handle_subscribe($(this),e,$("#fileid").attr("value"));
	});
});