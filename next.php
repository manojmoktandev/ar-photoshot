<!DOCTYPE html>
<html>
<head>
	<title>Digital signage</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="language" content="en">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="public/stylesheets/style.css">
	<link rel="stylesheet" type="text/css" href="public/stylesheets/slick.css">
	<link rel="stylesheet" type="text/css" href="public/stylesheets/font-awesome.min.css">
</head>
<body>
	<div class="wrapper">
			<div class="curtain">
		<div class="curtain__wrapper">
			<!-- <input type="checkbox" checked> -->
			<button type="button">Click Me</button>
			<div class="curtain__panel curtain__panel--left">
			</div>
			<!-- curtain__panel -->
			<div class="curtain__panel curtain__panel--right">
			</div>
			<!-- curtain__panel -->
		</div>
		<!-- curtain__wrapper -->
	</div>
	<!-- curtain -->
		<div class="container">
		<div class="select_box">
		<div class="slider-box">
			<div class="slider_for">
			  <div><img src="public/images/poster-1.jpg"></div>
			  <div><img src="public/images/poster-2.jpg"></div>
			  <div><img src="public/images/poster-3.jpg"></div>
			  <div><img src="public/images/poster-1.jpg"></div>
			  <div><img src="public/images/poster-2.jpg"></div>
			  <div><img src="public/images/poster-3.jpg"></div>
			</div>
			<a class="glow-on-hover" href="javaScript:void(0);">select</a>
		</div>
		<div class="slider_nav">
		  <div><img src="public/images/poster-1.jpg"></div>
		  <div><img src="public/images/poster-2.jpg"></div>
		  <div><img src="public/images/poster-3.jpg"></div>
		  <div><img src="public/images/poster-1.jpg"></div>
		  <div><img src="public/images/poster-2.jpg"></div>
		  <div><img src="public/images/poster-3.jpg"></div>
		</div>
	</div>
		<div class="capture_box" style="display: none">
			<div class="slider-box">
				<div class="slider_for_next">
				  <div><img src="public/images/poster-1.jpg"></div>
				  <div><img src="public/images/poster-2.jpg"></div>
				  <div><img src="public/images/poster-3.jpg"></div>
				  <div><img src="public/images/poster-1.jpg"></div>
				  <div><img src="public/images/poster-2.jpg"></div>
				  <div><img src="public/images/poster-3.jpg"></div>
				</div>
				<button class="glow-on-hover capture">Capture</button>
				<p id="demo" class="countdown" style="display: none;">10</p>
			</div>
		<div class="slider_nav_next">
			<div class="div1">
				<p id="demo1" class="countdown" style="display: none;">10</p>
				<img src="public/images/img01-capture.jpg" style="display: none" class="show">
			</div>
			<div class="div2">
				<p id="demo2" class="countdown" style="display: none;">10</p>
				<img src="public/images/img02-capture.jpg" style="display: none" class="show">
			</div>
			<div class="div3">
				<p id="demo3" class="countdown" style="display: none;">10</p>
				<img src="public/images/img03-capture.jpg" style="display: none" class="show">
			</div>
		</div>
	</div>
	</div>
		<div class="qrcode" style="display: none;">
		<p class="date">2019.12.13</p>
			<img src="public/images/qrcode.png">
			<p><span class="code"></span></span></p>
		</div>
	</div>
	</div>
</body>
	<script type="text/javascript" src="public/javascripts/jquery.min.js"></script>
	<script type="text/javascript" src="public/javascripts/custom.js"></script>
	<script type="text/javascript" src="public/javascripts/slick.min.js"></script>
</html>