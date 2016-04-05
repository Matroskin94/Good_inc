$(document).ready(function(){
	$('#main-right').click(function() {
		var curr_slide_text = $('.active-text'),
			next_slide_text = curr_slide_text.next(),
			curr_slide_img = $('.active-img'),
			next_slide_img = curr_slide_img.next().next(),
			curr_describe = $('.active-describe'),
			next_describe = curr_describe.next().next();
		//console.log(next_slide_text);
		if(next_slide_text.hasClass('main-article-text-container')){
			curr_slide_text.animate({right: 300},500);
			next_slide_text.animate({right: 0},500);
			curr_slide_img.animate({left: -630},500);
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
			curr_slide_text.animate({right: 50},200);
			curr_slide_text.animate({right: 0},200);
			curr_slide_img.animate({right: 50},200);
			curr_slide_img.animate({right: 0},200);
		}
	});

	$('#main-left').click(function(){
		var curr_slide_text = $('.active-text'),
			next_slide_text = curr_slide_text.prev();
		if(next_slide_text.hasClass('main-article-text-container')){
			curr_slide_text.animate({right: -300},500);
			next_slide_text.animate({right: 0},500);
			next_slide_text.addClass('active-text');
			curr_slide_text.removeClass('active-text');
		}else{
			curr_slide_text.animate({right: -50},200);
			curr_slide_text.animate({right: 0},200);
		}
	});
});