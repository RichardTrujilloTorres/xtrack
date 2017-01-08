<!DOCTYPE html>
<html lang="en" ng-app='app'>
<head>
	<meta charset="UTF-8">
	<title>{{ config('app.name') }}</title>

	<link rel="stylesheet" href="{{ asset('node_modules/bootstrap/dist/css/bootstrap.min.css') }}">

	<!-- <link rel="stylesheet" href="{{ asset('styles/css/jquery.bxslider.css') }}">
	<link rel="stylesheet" href="{{ asset('styles/css/rubick.css') }}">

	<link rel="stylesheet" href="{{ asset('styles/css/fonts/Rubik-Fonts.css') }}">
	<link rel="stylesheet" href="{{ asset('styles/css/fonts/pe-icon-7-stroke.css') }}"> -->
</head>
<body>

	<div class="container">
		<div ui-view></div>
	</div>
	
	<script src="{{ asset('node_modules/jquery/dist/jquery.js') }}"></script>
	<script src="{{ asset('node_modules/bootstrap/dist/js/bootstrap.js') }}"></script>

	<!-- Styles -->
	<!-- <script src="{{ asset('styles/js/gsdk-bootstrapswitch.js') }}"></script>
	<script src="{{ asset('styles/js/jquery.bxslider.js') }}"></script>
	<script src="{{ asset('styles/js/jquery.waypoints.min.js') }}"></script>
	<script src="{{ asset('styles/js/modernizr.js') }}"></script>
	<script src="{{ asset('styles/js/rubick.js') }}"></script> -->

	<!-- Angular App -->
	<script src="{{ asset('node_modules/angular/angular.js') }}"></script>
	<script src="{{ asset('node_modules/angular-cookies/angular-cookies.js') }}"></script>
	<script src="{{ asset('node_modules/angular-ui-router/release/angular-ui-router.js') }}"></script>
	<script src="{{ asset('node_modules/satellizer/dist/satellizer.js') }}"></script>

	<script src="js/app.js"></script>

	<script type="text/javascript">
		var APP_NAME = '{{ config('app.name') }}';


	</script>
</body>
</html>