$(function() {

	// Custom JS
	$('#my-menu').mmenu({
		extensions: ['theme-dark', 'fx-listitems-slide', 'pagedim-black'],
		navbar: {
			title: '<img src="img/logo.png" alt="logo">'
		},
		offCanvas: {
               position  : "right"
            }
      });
	var api = $('#my-menu').data('mmenu');
	api.bind('open:finish', function(){
		$('.hamburger').addClass('is-active');
		$('a.logo').css('opacity', '0');
	}).bind('close:finish', function(){
		$('.hamburger').removeClass('is-active');
		$('a.logo').css('opacity', '1');
	});
});
