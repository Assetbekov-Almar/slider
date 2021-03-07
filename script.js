$(function () {
	$("button").button()
	$("button").click(function(event) {
		$('button').removeClass('active')
		$(this).addClass('active')
	})
	$(".sliders-wrapper .slider").slider({
		value: 0,
		min: 0,
		max: 255,
		step: 1,
		slide: function (event, ui) {
			console.log()
			if ($('button.color.active')[0])
				$(".text-wrapper p").css("color", 'rgb(' + $('.red').slider('value') +','+ $('.green').slider('value') + ',' + $('.blue').slider('value') + ')')
			else if ($('button.bg-color.active')[0])
				$(".text-wrapper").css("background", 'rgb(' + $('.red').slider('value') + ',' + $('.green').slider('value') + ',' + $('.blue').slider('value') + ')')
		}
	})
})