<!DOCTYPE html>
<html>
<head>
	<title>Player Template</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="language" content="en">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta charset="utf-8">
	<!-- <link rel="stylesheet" type="text/css" href="public/stylesheets/style.css"> -->
	<link rel="stylesheet" type="text/css" href="public/stylesheets/mobi-style.css">
	<!-- <link rel="stylesheet" type="text/css" href="public/stylesheets/slick.css"> -->
	<!-- <link rel="stylesheet" type="text/css" href="public/stylesheets/font-awesome.min.css"> -->
</head>
<body>
	<div class="wrapper">
		<div class="payment">
			<div  class="header-title"> Payment Method</div>
			<div class="paymentbox">
				<img src="public/images/paypal.png">
				<img src="public/images/linepay.png">
				<img src="public/images/wechatpay.png">
				<img src="public/images/alipay.png">
				<img src="public/images/facebook.png">
				<img src="public/images/instagram.png">
			</div>
		</div>
		<div class="qrcode-box" style="display: none;">
			<div  class="header-title"> Scan QRCode</div>
			<div class="qrcode-reader">
				<img src="public/images/qcode.png">
			</div>
		</div>

		<div class="player" style="display: none">
			<div  class="header-title"> Player Template</div>
			<div style="display: block;" class="thumb-images">
				<div class="item"><img src="public/images/player/thumbs/player-1-thumb.jpg" id="0" onclick="mobileImageClick(this.id)"></div>
				<div class="item"><img src="public/images/player/thumbs/player-2-thumb.jpg" id="1" onclick="mobileImageClick(this.id)"></div>
				<div class="item"><img src="public/images/player/thumbs/player-3-thumb.jpg"id="2" onclick="mobileImageClick(this.id)"></div>
				<div class="item"><img src="public/images/player/thumbs/player-4-thumb.jpg"id="3" onclick="mobileImageClick(this.id)"></div>
				<div class="item"><img src="public/images/player/thumbs/player-5-thumb.jpg"id="4" onclick="mobileImageClick(this.id)"></div>
				<div class="item"><img src="public/images/player/thumbs/player-1-thumb.jpg"id="5" onclick="mobileImageClick(this.id)"></div>
			</div>
			<div class="btn-group">
			<button class="glow-on-hover"onclick="startClick()">Start!</button>
			<button class="glow-on-hover" href="javaScript:void(0);"  onclick="selectClick()" style="top:10%;">Select</button>
			<button class="glow-on-hover getimages">Get images</button>
			</div>
		</div>
		<div class="download-images" style="display: none">
			<div  class="header-title"> Download images</div>
			<div class="dlbox">
				<button class="dlbtn">Download all images</button>
			</div>
		</div>
	</div>
</body>
 <script src = "public/javascripts/socket.io.js"></script>
 <script src = "config/config.js"></script>
   <script>
      const socketUrl = config['socket_url']+':'+config['port'];
      // const connect = () => {
        socket = io(socketUrl, {
          autoConnect: true,
        });

        socket.on('connect', () => {
          console.log('Connected'+config['client_port']);
        });

        socket.on('disconnect', (reason) => {
          console.log(`Disconnected: ${reason}`);
        })

        socket.open();
      //};

      const disconnect = () => {
        socket.disconnect();
      }
      function mobileImageClick(image_id){
      	$(".thumb-images").children().removeClass("active");
      	$('#'+image_id).parent().addClass('active');
         socket.emit('mobileClick',image_id);
      }
      function startClick(){
      	socket.emit('start');
      }
      function selectClick(){
      	socket.emit('select');
      }
   </script>
	<script type="text/javascript" src="public/javascripts/jquery.min.js"></script>
	<script type="text/javascript" src="public/javascripts/custom.js"></script>
	<!-- <script type="text/javascript" src="public/javascripts/slick.min.js"></script> -->
	<script type="text/javascript" src="public/javascripts/script.js"></script>
	<!-- <script type="text/javascript" src="public/javascripts/isotope.pkgd.min.js"></script> -->
	<script src="https://npmcdn.com/imagesloaded@4/imagesloaded.pkgd.js"></script>
</html>