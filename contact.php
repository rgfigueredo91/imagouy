<!DOCTYPE html>

<html lang="en">
	<head>
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
		<meta charset="UTF-8"/> 
		<title>Imago Rendering Studio</title>

		<meta name="description" content="Imago was founded in 2018 by Andres Baptista and Rodrigo Figueredo. We are a Rendering and 3dart imaging studio based in Montevideo, Uruguay."/>
		<meta name="keywords" content="imago - Rendering Visualization Studio"/>
		<meta name="author" content="Rodrigo Figueredo"/>
		<meta name="viewport" content="=width=device-width, initial-scale=1.0"/>
		<meta property="og:type" content="website"/>
		<meta property="og:title" content="Imago Rendering Studio"/>
		<meta name="google-site-verification" content="E0SpeRDXnyyyYe_az7hMb6PirOHIawPyVZi6EA_HKSc" />
		<meta property="og:description" content="Imago was founded in 2018 by Andres Baptista and Rodrigo Figueredo. We are a Rendering and 3dart imaging studio based in Montevideo, Uruguay."/>
		<meta property="og:url" content="https://imago.uy"/>
		<meta name="description" content="contact form example">
S
		<link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
		<link rel="stylesheet" type="text/css" href="styles/contact.css">
		<link rel="stylesheet" href="https://use.typekit.net/oov2wcw.css">
		<link rel="shortcut icon" type="image/png" href="favicon.png"/>
		<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
 		<script src="src/fullclip.js"></script>
 		<script src='https://www.google.com/recaptcha/api.js'></script>
 	
 		
	</head>

	<body>
				<!-- Load Facebook SDK for JavaScript -->
      <div id="fb-root"></div>
      <script>
        window.fbAsyncInit = function() {
          FB.init({
            xfbml            : true,
            version          : 'v6.0'
          });
        };

        (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));</script>

      <!-- Your customer chat code -->
      <div class="fb-customerchat"
        attribution=setup_tool
        page_id="108697060701498"
  theme_color="#000000"
  logged_in_greeting="Hi! How can we help you?"
  logged_out_greeting="Hi! How can we help you?">
      </div>
      
<!--barra fija arriba-->
		<header class="navbar">
			<div class="wrapper1">
				<h1 class="title"><a href="/">imago</h1></a>
			</div>
			<div class="wrapper2">
				<ul class="menu">
					<li class="items"><a href="/" id="link-font">portfolio</a></li>
					<li class="items"><a href="about.html" id="link-font">about</a></li>
					<li class="items"><a href="360.html" id="link-font">360</a></li>
					<li class="items"><a href="contact.html" id="link-font">contact</a></li>
				</ul>
			</div>
				<ul class="social-menu">
					<li class="social-icon" id="instagram"><a href="https://www.instagram.com/imago_uy/" target="_blank"><i class="fa fa-instagram"></i></a></li>
					<li class="social-icon" id="linkedin"><a href="https://www.linkedin.com/company/imagouy/?viewAsMember=true" target="_blank"><i class="fa fa-linkedin"></i></a></li>
					<li class="social-icon" id="github"><a href="https://github.com/rgfigueredo91" target="_blank"><i class="fa fa-github"></i></a></li>
					<li class="social-icon" id="facebook"><a href="https://www.facebook.com/Imago-Rendering-Studio-108697060701498/?view_public_for=108697060701498" target="_blank"><i class="fa fa-facebook"></i></a></li>
				</ul>
			
		</header>

<!--barra fija arriba telefono navbar-->
		<section class="phonenavbar">

			<h1 class="titlephone"><a href="/">imago</h1></a>
			<input type="checkbox" id="nav-toggle" class="nav-toggle">
				<nav class="navphone">
					<ul>
						<li><a href="/">portfolio</a></li>
						<li><a href="about.html">about</a></li>
						<li><a href="360.html">360</a></li>
						<li><a href="contact.html">contact</a></li>
						<li class="social-icon" id="instagram"><a href="https://www.instagram.com/imago_uy/" target="_blank"><i class="fa fa-instagram"></i></a></li>
						<li class="social-icon" id="linkedin"><a href="https://www.linkedin.com/company/imagouy/?viewAsMember=true" target="_blank"><i class="fa fa-linkedin"></i></a></li>
						<li class="social-icon" id="github"><a href="https://github.com/rgfigueredo91" target="_blank"><i class="fa fa-github"></i></a></li>
						<li class="social-icon" id="facebook"><a href="https://www.facebook.com/Imago-Rendering-Studio-108697060701498/?view_public_for=108697060701498" target="_blank"><i class="fa fa-facebook"></i></a></li>
					</ul>
				</nav>
				<label for="nav-toggle" class="nav-toggle-label">
					<span></span>
				</label>
		</section>


		<div class="main">
						<div class="formulario">



			<?php
// Checks if form has been submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    function post_captcha($user_response) {
        $fields_string = '';
        $fields = array(
            'secret' => '_______________PRIVATE_KEY_______________',
            'response' => $user_response
        );
        foreach($fields as $key=>$value)
        $fields_string .= $key . '=' . $value . '&';
        $fields_string = rtrim($fields_string, '&');

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, 'https://www.google.com/recaptcha/api/siteverify');
        curl_setopt($ch, CURLOPT_POST, count($fields));
        curl_setopt($ch, CURLOPT_POSTFIELDS, $fields_string);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, True);

        $result = curl_exec($ch);
        curl_close($ch);

        return json_decode($result, true);
    }

    // Call the function post_captcha
    $res = post_captcha($_POST['g-recaptcha-response']);

    if (!$res['success']) {
        // What happens when the CAPTCHA wasn't checked
        echo '<p>Please go back and make sure you check the security CAPTCHA box.</p><br>';
    } else {
        // If CAPTCHA is successfully completed...

        // Paste mail function or whatever else you want to happen here!
        echo '<br><p>CAPTCHA was completed successfully!</p><br>';
    }
} else { ?>


						  <form class="gform pure-form pure-form-stacked" method="POST" data-email="example@email.net"
						  action="https://script.google.com/macros/s/AKfycbyxbVUkYGnCGeXQDGp50DVJxeLZMb_0L4ZQ-Z1L/exec">
						    <!-- change the form action to your script url -->

						    <div class="form-elements">
						      <fieldset class="pure-group">
						        <label for="name"></label>
						        <input id="name" name="name" placeholder="Name" />
						      </fieldset>

						         <fieldset class="pure-group">
						        <label for="email"></label>
						        <input id="email" name="email" type="email" value=""
						        required placeholder="Your e-mail"/>
						        <span class="email-invalid" style="display:none">
						          Must be a valid email address</span>
						      </fieldset>

						      <fieldset class="pure-group">
						        <label for="message"></label>
						        <textarea id="message" name="message" rows="10"
						        placeholder=""></textarea>
						      </fieldset>

						   <div class="g-recaptcha" data-sitekey="6LcE4ukUAAAAAEEtRG9_BqDzNQwTz0zuGhAZnnPl"></div>


						      <button >
						        Contact us</button>
						    </div>

						    

						    <!-- Customise the Thankyou Message People See when they submit the form: -->
						    <div class="thankyou_message" style="display:none;">
						      <h3 class="h3">Thanks for contacting us</h3>
						      <h3 class="h3">We will get back to you soon!</h3>
						    </div>

						  </form>
<?php } ?>
						  <!-- Submit the Form to Google Using "AJAX" -->
						  <script data-cfasync="false" type="text/javascript"
						  src="form-submission-handler.js"></script>
						<!-- END -->
						</div>


		</div>


	</body>

</html>
