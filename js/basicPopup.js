/*!
 * jquery.basicPopup
 * 
 * 
 * @author Lucas Dasso
 * @version 1.0.0
 * Copyright 2015. ISC licensed.
 */
$(document).ready(function(){

		
	$('#btn-open').click(function(){	
		
		$.basicpopup({
			content: $('#popup-content').html()
		});
		console.log($('#popup-content').html())
		
	});
	// $('#btn-open').click(function(){
	// 	$.getJSON("/html-card.json", function(card){
	// 		$.basicpopup({
	// 			content: card
	// 		})
	// 	})
	// })

});