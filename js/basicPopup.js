/*!
 * jquery.basicPopup
 * 
 * 
 * @author Lucas Dasso
 * @version 1.0.0
 * Copyright 2015. ISC licensed.
 */
$(document).ready(function() {
	
        $(window).scroll( function ()
        {
		var navHeight = $( window ).height() - 70;
		console.log(navHeight);
		if ($(window).scrollTop() > navHeight) {
			$('.nav').addClass('fixed');
			console.log("fixed added");
		}
		else {
			$('.nav').removeClass('fixed');
			console.log("fixed removed");
		}
        });

// 	$('#runtime').on('scroll', function() {
// 		var navHeight = $( window ).height() - 70;
// 		if ($(window).scrollTop() > navHeight) {
// 			$('.nav').addClass('fixed');
// 		}
// 		else {
// 			$('.nav').removeClass('fixed');
// 		}
// 	});
	
// 	$('#btn-open').click(function(){
// 		btn = $(this).val()
// 		$.getJSON("/../data/data.json", function(card){
// 			$.basicpopup({
// 				content: card[btn].content,
// 				tags: card[btn].tags
// 			})
// 		})
// 	})
	
	
	$('.btn-open').click(function(){
		// btn = $(this).val()
		btn = this.id
		$.get("/../data/"+btn+".html", function(htmlContent){
			$.basicpopup({
				content: htmlContent
			})
		})
	})

});
