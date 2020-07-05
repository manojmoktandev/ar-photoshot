$(document).ready(function() {
	var x = document.getElementById("myAudio");
	var $grid = $('.grid').imagesLoaded(function() {
		$grid.packery({
			// options
			itemSelector: '.grid-item',
			layoutMode: 'packery',
			percentPosition: true,
			// columnWidth: '.grid-sizer',
			// rowHeight: '.grid-sizer',
		})
	});
	setRandomClass();
	setInterval(function() {
		setRandomClass();
	}, 1000);

	// clock();
	setInterval(function() {
		$(".content").slideDown();
	}, 5000);
	$(".capture").click(function() {
		$(".capture").hide();
		clock();
		setInterval(clock, 1000 * 11);
		// c == 5
	})
	var myTimer;

	var time = 0;

	function clock() {
		$(".slider-box").removeClass("shadow");
		if (time < 3) {
			myTimer = setInterval(myClock, 1000);
			var c = 10;
			time++;
			console.log("time:" + time);
			$(".countdown").hide();
			$("#demo" + time).show();

			function myClock() {
				$("#demo" + time).text(--c);
				if (c == 0) {
					clearInterval(myTimer);
					$("#demo" + time).text(10);
					// $(".slider_nav_next .div" + time).children(".hide").hide();
					$(".slider_nav_next .div" + time).children(".show").show();
					$(".slider-box").addClass("shadow");
					x.play();
					setTimeout(function() {
						ani();
					}, 1000);
					$(".countdown").hide();
				}
			}
			// if (time == 3) {
			// 	$(".capture").html("Finishing...");
			// }

		} else {
			// $(".capture").html("Finished");
			setInterval(function() {
				$(".slider").hide();
				$(".qrcode").slideDown();
				var today = new Date();
				var dd = String(today.getDate()).padStart(2, '0');
				var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
				var yyyy = today.getFullYear();
				today = mm + '/' + dd + '/' + yyyy;
				$(".date").html(today);

			}, 3000);
			var barcodeDate = Math.floor(1000 + Math.random() * 9000);
			$(".code").html(barcodeDate);
			setInterval(function() {
				window.location.href = "index.php";
				// $(".three").css("opacity", 1);
				$(".three").addClass("open");
			}, 6000);
			// $(".slider-box").hide();
			// $(".qrcode").show();


		}
	}
	$(".slider-box .glow-on-hover").click(function() {
		// debugger;
		ani();
		var dataId = $('.slick-current').attr("data-slick-index");
		// alert(dataId);
		$(".select_box").hide();
		// $(".three").css("opacity", 1);
		// $('.three').addClass('open');
		// debugger;
		$(".capture_box").show();
		captureSlider(dataId);
	});
	$(".action").click(function() {
		// debugger;
		$('.cont').animate({
			"opacity": "1"
		}, 900);
		$('.pen-label').fadeIn(1000);
		$('.rRect').animate({
			"width": "20%",
			"box-shadow": "0 0 20px gray"
		}, 1000, 'easeInOutCirc');
		$('.pen-label').animate({
			"color": "white"
		}, 1000);
	});
	$('.gridBox .glow-on-hover').click(function() {
		// debugger;
		$(".textimg").hide();
		$(".slider").show();
		$(".three").css("opacity", 1);
		// $('.curtain__wrapper').toggleClass('show');
		$('.three').addClass('open');
		$(".gridBox").hide();
		$('.slider_for').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			// fade: true,
			infinite: true,
			// initialSlide: 4,
			prevArrow: "<button type='button' class='custom-btn slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
			nextArrow: "<button type='button' class='custom-btn slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
			asNavFor: '.slider_nav'
		});
		$('.slider_nav').slick({
			slidesToShow: 5,
			slidesToScroll: 1,
			swipeToSlide: true,
			asNavFor: '.slider_for',
			prevArrow: "<button type='button' class='custom-btn slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
			nextArrow: "<button type='button' class='custom-btn slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
			dots: false,
			centerMode: true,
			arrows: true,
			focusOnSelect: true,
			infinite: true,
			// initialSlide: 4
			// loop: true
		});
		ani();

	});
	$(".paymentbox").click(function() {
		$(".payment").hide();
		$(".qrcode-box").show();

	})
	$(".qrcode-reader").click(function() {
		$(".player").show();
		$(".qrcode-box").hide();

	})
	$(".getimages").click(function() {
		$(".player").hide();
		$(".qrcode-box").hide();
		$(".download-images").show();
	})
	$(".dlbtn").click(function() {
		$(".payment").show();
		// $(".qrcode-box").hide();
		$(".download-images").hide();
	})

});

function ani() {
	$(".three").removeClass("open");
	$(".three").css("opacity", 1);
	setTimeout(function() {
		$(".three").addClass("open");
		//$(".three").css("opacity", 0);
		setTimeout(function() {
			$(".three").css("opacity", 0);
			$(".three").removeClass("open");

		}, 500);

	}, 200);
}

function setRandomClass() {
	var grod = $('.grid');
	var gridItem = grod.find('.grid-item');
	var number = gridItem.length;
	var random = Math.floor((Math.random() * number));
	if (gridItem.eq(random).hasClass('grid-item_active')) {
		var random = random + 1
	}
	$('.grid-item_active').addClass('active')
		.siblings().removeClass('active');
	gridItem.eq(random).addClass('active')
		.siblings().removeClass('active');
}



function captureSlider(currentID) {
	$('.slider_for_next').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		initialSlide: currentID,
		prevArrow: "<button type='button' class='custom-btn slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
		nextArrow: "<button type='button' class='custom-btn slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
		//asNavFor: '.slider_nav'
		loop: false
	});
}