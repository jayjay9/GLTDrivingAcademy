var index = {
	'init' : function(){

	},

	'register_handlers' : function(){
		$('.nav-xs-top').on('click', function(){
			$('.nav-xs-head-top').animate({
        		height: 'toggle'
        		}, 290, function() {
    		});
		});
	},

	'initMap' : function (){
        var uluru = {lat: 49.3163564, lng: -123.0767439};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 17,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
	}
};

$( document ).ready(function() {
    index.init();
    index.register_handlers();
    index.initMap();
});

$(document).mouseup(function(e) 
{
    var container = $('.nav-xs-head-top');
    var toggle_btn = $('.nav-xs-top');

    // if the target of the click isn't the container nor a descendant of the container
    if ((!container.is(e.target) && container.has(e.target).length === 0) && 
    	(!toggle_btn.is(e.target) && toggle_btn.has(e.target).length === 0))
    {
    	container.hide();
    }
});