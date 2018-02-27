$(document).ready(function() {

	var userFeed = new Instafeed({
		get:'user',
		userId: '31178815',
		limit: 20,
		resolution: 'standard_resolution',
		accessToken: '31178815.1677ed0.ab46f67f5a014bc08df5297e9ebbdf88',
		sortyBy: 'most-recent',
		template: '<div class="item" ><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
		target: 'instafeed',
		after: function() {
			$(".owl-carousel").owlCarousel({
			loop: true,
			margin:10,
			nav:true,
			 responsive: {
			 	0:{
			 		items:5,

			 	},

			 	600:{
			 		 items: 3,

				},

			 	1000:{
			 		 items:1,
			 	}
			 } 
		})

		}

});	


	userFeed.run();


});