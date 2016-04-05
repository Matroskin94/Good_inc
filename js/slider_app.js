$(document).ready(function(){
	$('.main-arrow').click(function() {
		var curr_slide_text = $('.active-text'),
			next_slide_text = null,
			curr_slide_img = $('.active-img'),
			next_slide_img = null,
			curr_describe = $('.active-describe'),
			next_describe = null,
			text_margin = 0,
			pic_margin = 0,
			col_margin = 0;
		//console.log($(this).attr('id'));
		if($(this).attr('id') === 'main-right'){
			next_slide_text = curr_slide_text.next();
			next_slide_img = curr_slide_img.next().next();
			next_describe = curr_describe.next().next();
			text_margin = 300;
			pic_margin = -630;
			col_margin = 50;
		} else if ($(this).attr('id') === 'main-left'){
			next_slide_text = curr_slide_text.prev();
			next_slide_img = curr_slide_img.prev().prev();
			next_describe = curr_describe.prev().prev();
			text_margin = -300;
			pic_margin = 630;
			col_margin = -50;
		}

		if(next_slide_text.hasClass('main-article-text-container')){
			curr_slide_text.animate({right: text_margin},500);
			next_slide_text.animate({right: 0},500);
			curr_slide_img.animate({left: pic_margin},500);
			next_slide_img.animate({left: 0},500);
			curr_describe.animate({opacity:0},500);
			next_describe.animate({opacity:1},500);

			next_slide_text.addClass('active-text');
			curr_slide_text.removeClass('active-text');
			next_slide_img.addClass('active-img');
			curr_slide_img.removeClass('active-img');
			next_describe.addClass('active-describe');
			curr_describe.removeClass('active-describe');
		}else{
			curr_slide_text.animate({right: col_margin},200);
			curr_slide_text.animate({right: 0},200);
		}
	});

});