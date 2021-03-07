$(function () {
	$("button").button()
	$("button").click(function(event) {
	})
	$(".sliders-wrapper .slider").slider({
		value: 0,
		min: 0,
		max: 255,
		step: 1,
		slide: function (event, ui) {
			console.log(ui.value)
			$(".text-wrapper").css("background", 'rgb(' + ui.value + ', 0, 0)')
		}
	})

})