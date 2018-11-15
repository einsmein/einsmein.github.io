/*!
 * jquery.basicPopup
 * 
 * 
 * @author Lucas Dasso
 * @version 1.0.0
 * Copyright 2015. ISC licensed.
 */
$(document).ready(function(){

		
	// $('#btn-open').click(function(){	
		
	// 	$.basicpopup({
	// 		content: $('#popup-content').html()
	// 	});
	// 	console.log($('#popup-content').html())
		
	// });
	
	
// 	$('#btn-open').click(function(){
// 		btn = $(this).val()
// 		$.getJSON("/../data/data.json", function(card){
// 			$.basicpopup({
// 				content: card[btn].content,
// 				tags: card[btn].tags
// 			})
// 		})
// 	})
	
	
	$('#btn-open').click(function(){
		btn = $(this).val()
		$.getJSON("/../data/"+btn+".html", function(content){
			$.basicpopup({
				htmlContent: content
			})
		})
	})

});
