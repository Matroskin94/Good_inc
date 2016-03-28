$(document).ready(function(){
	var dropBlock = null,
			selectRes = null,
			t = 0;


	$('.select-items').click(function(){
		dropBlock = $(this).find('.drop');
		if(dropBlock.is(':hidden')){
			dropBlock.slideDown();
			$(this).addClass('active');
		}
		return false;
	});

	$('.drop').find('li').click(function(){
				dropBlock = $(this).parent().parent().find('.drop');
				selectRes = $(this).text();
				$(this).parent().parent().find('input').val(selectRes);
				$('.select-items').removeClass('active');
				$(this).parent().parent().find('.choosen').text(selectRes);
				dropBlock.slideUp();
				console.log("season" + $('#select-season').val());
				console.log("country" + $('#select-country').val());
				return false;
			});
});