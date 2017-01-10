<!doctype html>
<html lang="en" ng-app='app'>
<head>
	<meta charset="utf-8" />
	<link rel="apple-touch-icon" sizes="76x76" href="" />
	<link rel="icon" type="image/png" href="" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />

	<title>@yield('title') | {{ config('app.name') }}</title>

	<meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />
    <meta name="viewport" content="width=device-width" />

    <!-- Bootstrap core CSS     -->
    <link href="../assets/css/bootstrap.min.css" rel="stylesheet" />

    <!--  Material Dashboard CSS    -->
    <link href="../assets/css/material-dashboard.css" rel="stylesheet"/>

    <!--  CSS for Demo Purpose, don't include it in your project     -->
    <link href="../assets/css/demo.css" rel="stylesheet" />

    <!--     Fonts and icons     -->
    <link href="http://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" rel="stylesheet">
    <link href='http://fonts.googleapis.com/css?family=Roboto:400,700,300|Material+Icons' rel='stylesheet' type='text/css'>

    <!-- Algolia Search autcomplete -->
    <link rel="stylesheet" href="/css/algoliasearch.css">




</head>

<body>

	<div class="wrapper">

	    <div ng-include="'templates/partials/dashboard/_sidebar.html'"
	    ng-controller="DashboardController as dashboard"></div>


	    <!-- <div ui-view></div> -->

	    <div class="main-panel">

		<div ng-include="'templates/partials/dashboard/navbar.html'" 
		ng-controller="DashboardController as dashboard"></div> 
		<!-- <div ui-view="navbar"></div> -->

		<div class="content">
			<div class="container-fluid">
				<!-- <div ng-include="'templates/sections/graphics.html'"></div> -->
				<div ui-view></div>
			</div>
		</div>
	</div>


	
</div>


		@include('partials._footer')
	</div>
</div>

</body>

	<script type="text/javascript">
		var APP_NAME = '{{ config('app.name') }}';
	</script>

	<!--   Core JS Files   -->
	<script src="../assets/js/jquery-3.1.0.min.js" type="text/javascript"></script>
	<script src="../assets/js/bootstrap.min.js" type="text/javascript"></script>
	<script src="../assets/js/material.min.js" type="text/javascript"></script>

	<!--  Charts Plugin -->
	<!-- <script src="../assets/js/chartist.min.js"></script> -->

	<!--  Notifications Plugin    -->
	<script src="../assets/js/bootstrap-notify.js"></script>

	<!--  Google Maps Plugin    -->
	<!-- <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js"></script> -->

	<!-- Material Dashboard javascript methods -->
	<script src="../assets/js/material-dashboard.js"></script>

	<!-- Material Dashboard DEMO methods, don't include it in your project! -->
	<!-- <script src="../assets/js/demo.js"></script> -->

	<!-- <script type="text/javascript">
    	$(document).ready(function(){

			// Javascript method's body can be found in assets/js/demos.js
        	demo.initDashboardPageCharts();

    	});
	</script> -->

	<!-- Angular deps -->
	<script src="{{ asset('node_modules/angular/angular.js') }}"></script>
	<script src="{{ asset('node_modules/angular-cookies/angular-cookies.js') }}"></script>
	<script src="{{ asset('node_modules/angular-ui-router/release/angular-ui-router.js') }}"></script>
	<script src="{{ asset('node_modules/satellizer/dist/satellizer.js') }}"></script>

	

	<!-- Algolia Search -->
	<script src="https://cdn.jsdelivr.net/algoliasearch/3/algoliasearch.min.js"></script>
	<script src="https://cdn.jsdelivr.net/algoliasearch/3/algoliasearch.angular.min.js"></script>
	<script src="https://cdn.jsdelivr.net/autocomplete.js/0/autocomplete.angular.min.js"></script>

	<!-- Angular App -->
	<script src="js/app.js"></script>


	

</html>
