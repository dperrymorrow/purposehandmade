//= require_tree .
//= require jquery/dist/jquery.js
//= require bootstrap.js
//= require featherlight/release/featherlight.min.js
//= require featherlight/release/featherlight.gallery.min.js


$('.gallery').featherlightGallery({
	gallery: {
		fadeIn: 300,
		fadeOut: 300
	},
	targetAttr: 'src',
	openSpeed:    300,
	closeSpeed:   300
});
