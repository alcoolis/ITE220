<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=Cp1252">
<title>Insert title here</title>

<link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
<link rel="stylesheet" href="css/style.css">

<link href='https://fonts.googleapis.com/css?family=Chewy' rel='stylesheet' type='text/css'>
<link href='https://fonts.googleapis.com/css?family=Architects+Daughter' rel='stylesheet' type='text/css'>


<script src="js/jquery.js"></script>


<script src="js/app.js"></script>

</head>
<body>

	<div id="content">

		<div id="panel">
		
		
		<?php
		
		echo "<h1>GIRLS' GENERATION 4TH TOUR - PHANTASIA</h1>";
    
echo "<div class='paragraph'>It is a private concert, therefore there are only 15
seats which are divided into rows; <span style='color:#315a05;font-weight: bold;'>A</span>, 
    <span style='color:#055e66;font-weight: bold;'>B</span>, and 
    <span style='color:#923931;font-weight: bold;'>C</span>.</div>";

echo "<div id='prices'> <ul><li> Cost 3,000THB</li><li> Cost 2,000THB</li>
    <li> Cost 1,000THB</li></ul></div>";

echo "<div class='paragraph'> Our Site has a lucky draw promotion campaign. Find the lucky place and win 
    a 50% discount for this seat!!!</div>";

echo "<a id='button' href='result.php'>Buy Now!</a>";
                
		  

		?>
		</div>
		<!-- END of panel -->
		
		<div id="stage">
		
			<div id="screen">
			
           		<h1>Price: </h1><h1></h1><h1>Please choose at least 1 ticket!</h1>
			</div><!-- END of screen -->
			
		</div><!-- END of stage -->
		
		<div id="seats">
		
            <?php
            $seats = array(
                'A-1' => "<a class='A' href='#'><img src='img/A1.png'/></a>",
                'A-2' => "<a class='A' href='#'><img src='img/A1.png'/></a>",
                'A-3' => "<a class='A' href='#'><img src='img/A1.png'/></a>",
                'A-4' => "<a class='A' href='#'><img src='img/A1.png'/></a>",
                'A-5' => "<a class='A' href='#'><img src='img/A1.png'/></a>",
                'B-1' => "<a class='B' href='#'><img src='img/A1.png'/></a>",
                'B-2' => "<a class='B' href='#'><img src='img/A1.png'/></a>",
                'B-3' => "<a class='B' href='#'><img src='img/A1.png'/></a>",
                'B-4' => "<a class='B' href='#'><img src='img/A1.png'/></a>",
                'B-5' => "<a class='B' href='#'><img src='img/A1.png'/></a>",
                'C-1' => "<a class='C' href='#'><img src='img/A1.png'/></a>",
                'C-2' => "<a class='C' href='#'><img src='img/A1.png'/></a>",
                'C-3' => "<a class='C' href='#'><img src='img/A1.png'/></a>",
                'C-4' => "<a class='C' href='#'><img src='img/A1.png'/></a>",
                'C-5' => "<a class='C' href='#'><img src='img/A1.png'/></a>"
            );
            $counter = 0;
            
            foreach ($seats as $item)
            {
                echo $item;
                
                $counter ++;
                
                if ($counter % 5 == 0)
                    echo "<br>";
            }
            
            ?>
            
    	</div><!-- END of seats -->
	</div><!-- END of content -->

</body>
</html>