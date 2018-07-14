<?php


?>
<!DOCTYPE html>
<html lang="fr">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="keywords" content="EZoverlays, test, page">
	<meta name="description" content="Test EZoverlays">
	<meta name="author" content="jcrangon">
	
	<link rel="stylesheet" href="./EZoverlays/css/EZoverlays.css" type="text/css" />
	
	<script type="text/javascript" src="./EZoverlays/js/jquery/jquery-3.1.1.min.js"></script>
	<script type="text/javascript" src="./EZoverlays/js/EZoverlays.js"></script>
	
	<title>EZoverlays</title>
</head>
<body>
	<?php include("./EZoverlays/EZoverlays.php"); ?>
	
	<button id="fireoverlay1">Overlay1</button>
	<br /><br />
	
	<img id="fireoverlay2" src="./EZoverlays/resources/pics/img1.png" title="open overlay" style="width:80px;cursor:pointer;"/>
	<br /><br />
	
	<a href="#" id="fireoverlay3"> Open overlay 3</a>
	<br /><br />
	
	<p id="fireoverlay4" style="cursor:pointer;"> Click me for overlay 4</p>
	
</body>	
	
</html>