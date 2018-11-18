/*!
 * jquery.basicPopup
 * 
 * 
 * @author Lucas Dasso
 * @version 1.0.0
 * Copyright 2015. ISC licensed.
 */
$(document).ready(function() {
	
	// $('.btn-open').click(function(){
		// btn = $(this).val()
		// $.getJSON("/../data/data.json", function(card){
			// $.basicpopup({
			// 	content: "test"
			// })
		// })
	// })
	
	
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
