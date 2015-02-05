$(function(){
	$(".analytics").on("click",function(e){
		var data = $(this).data();
		if(typeof data.trackevent !== 'undefined'){
			var marcas = data.trackevent.split("/");
			if (typeof ga !== 'undefined') {
                   ga('send', 'event', marcas[0], marcas[1], marcas[2]);
                }
               //check if _gaq is set too

			if(typeof _gaq !== 'undefined'){
				_gaq.push(['_trackEvent', marcas[0], marcas[1], marcas[2]]);
			}
		}
		if(typeof data.trackpage !== 'undefined'){
			var marca = data.trackpage;
			if (typeof ga !== 'undefined') {
                   ga('send', 'pageview', marca);
                }

			if(typeof _gaq !== 'undefined'){
				_gaq.push(['_trackPageview', marca]);
			}
		}
	});	
});