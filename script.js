$(document).ready(function () {
	$("button").button()
	$("button").click(function(event) {
		$('button').removeClass('active')
		$(this).addClass('active')
	})
	$(".sliders-wrapper .slider").slider({
		value: 254,
		min: 0,
		max: 255,
		step: 1,
		slide: function (event, ui) {
			if ($(this).hasClass('red'))
				$(this).css("background", 'rgb(' + $(this).slider('value') + ',0,0)')
			else if ($(this).hasClass('green'))
				$(this).css("background", 'rgb(0,' + $(this).slider('value') + ',0)')
			else $(this).css("background", 'rgb(0,0,' + $(this).slider('value') + ')')

			if ($('button.color.active')[0])
				$(".text-wrapper p").css("color", 'rgb(' + $('.red').slider('value') +','+ $('.green').slider('value') + ',' + $('.blue').slider('value') + ')')
			else if ($('button.bg-color.active')[0])
				$(".text-wrapper").css("background", 'rgb(' + $('.red').slider('value') + ',' + $('.green').slider('value') + ',' + $('.blue').slider('value') + ')')
		}
	})

	// $(".sliders-wrapper .slider").slider('value', $(".sliders-wrapper .slider").slider('value') + $(".sliders-wrapper .slider").slider('option', 'step'))

})