const $buttons = $("button"),
      $slidersWrapper = $(".sliders-wrapper"),
      $sliders = $slidersWrapper.find('.slider'),
      $redSlider = $slidersWrapper.find('.red'),
      $greenSlider = $slidersWrapper.find('.green'),
      $blueSlider = $slidersWrapper.find('.blue')

$(document).ready(function () {
	$buttons.button()
	$buttons.click(function () {
		$buttons.removeClass('active')
		$(this).addClass('active')
	})
	$sliders.slider({
		value: 170,
		min: 0,
		max: 255,
		step: 1,
		slide: function (event, ui) {
			let slideValue = $(this).slider('value'),
			    redColor = `rgb(${slideValue}, 0, 0)`,
			    greenColor = `rgb(0, ${slideValue}, 0)`,
			    blueColor = `rgb(0, 0, ${slideValue})`,
			    $sliderScroller = $(this).find('.ui-slider-handle'),
			    rgbColor = `rgb(${$redSlider.slider('value')}, ${$greenSlider.slider('value')}, ${$blueSlider.slider('value')})`

			if ($(this).hasClass('red')) {
				$(this).css("background", redColor)
				$sliderScroller.css("border-color", redColor)
			}
			else if ($(this).hasClass('green')) {
				$(this).css("background", greenColor)
				$sliderScroller.css("border-color", greenColor)
			}
			else {
				$(this).css("background", blueColor)
				$sliderScroller.css("border-color", blueColor)
			}

			if ($('button.color.active')[0])
				$(".text-wrapper p").css("color", rgbColor)
			else if ($('button.bg-color.active')[0])
				$(".text-wrapper").css("background", rgbColor)
		},
	}).each(function (i, e) {
		$(this).slider('option', 'slide').call(e)
	})
})