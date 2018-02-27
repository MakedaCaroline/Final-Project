// $(document).ready(function() {
// 	$(".owl-carousel").owlCarousel({
// 		loop: true,
// 		margin:10,
// 		responiveClass: true,
// 		responsive: {
// 			0:{
// 				items:1,
// 				nav:true

// 			},

// 			600:{
// 				 items: 3,
// 				 nav: false

// 			},

// 			1000:{
// 				 items:5,
//             	 nav:true,
//             	 loop:false
// 			}
// 		} 
// 	});

// });


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
			items:1,
			margin:10,
			center:true,
			autoWidth:true,
			autoHeight:true,
			autoplay:true,
    		autoplayTimeout:2000,
    		autoplayHoverPause:true,
			nav:true,
			 responsive: {
			 // 	0:{
			 // 		items:1,

			 // 	},

			 // 	600:{
			 // 		 items:3 ,

				// },

			 // 	1000:{
			 // 		 items:5,
			 // 	}
			 } 
		})

		}

});	


	userFeed.run();


});