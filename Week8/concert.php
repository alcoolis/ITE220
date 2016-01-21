<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=Cp1252">
<title>GIRLS' GENERATION</title>

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
		
    	   <h1>GIRLS' GENERATION</br>4<sup>th</sup></br>TOUR-PHANTASIA</h1>
        
                <div class='paragraph'>It is a private concert, therefore there are only 15
                    seats which are divided into rows
                    <span>A</span>, 
                    <span>B</span>, and 
                    <span>C</span>.
                </div>
                <div id='prices'> 
                    <ul>
                        <li> Cost 3,000THB</li>
                        <li> Cost 2,000THB</li>
                        <li> Cost 1,000THB</li>
                    </ul>
                </div><!-- END of prices -->
    
                <div class='paragraph'> Our Site has a lucky draw promotion campaign. Find the 
                    lucky place and win a 50% discount for this seat!!!
                </div>
    			
    			<form action="result.php" method="post">
        			<div id="hiddenDiv">
            			<input class="checkBoxes" type="checkbox" id="cA-1" name="seats[]" value="A-1">
            			<input class="checkBoxes" type="checkbox" id="cA-2" name="seats[]" value="A-2">
            			<input class="checkBoxes" type="checkbox" id="cA-3" name="seats[]" value="A-3">
            			<input class="checkBoxes" type="checkbox" id="cA-4" name="seats[]" value="A-4">
            			<input class="checkBoxes" type="checkbox" id="cA-5" name="seats[]" value="A-5">
            			<input class="checkBoxes" type="checkbox" id="cB-1" name="seats[]" value="B-1">
            			<input class="checkBoxes" type="checkbox" id="cB-2" name="seats[]" value="B-2">
            			<input class="checkBoxes" type="checkbox" id="cB-3" name="seats[]" value="B-3">
            			<input class="checkBoxes" type="checkbox" id="cB-4" name="seats[]" value="B-4">
            			<input class="checkBoxes" type="checkbox" id="cB-5" name="seats[]" value="B-5">
            			<input class="checkBoxes" type="checkbox" id="cC-1" name="seats[]" value="C-1">
            			<input class="checkBoxes" type="checkbox" id="cC-2" name="seats[]" value="C-2">
            			<input class="checkBoxes" type="checkbox" id="cC-3" name="seats[]" value="C-3">
            			<input class="checkBoxes" type="checkbox" id="cC-4" name="seats[]" value="C-4">
            			<input class="checkBoxes" type="checkbox" id="cC-5" name="seats[]" value="C-5">
        			</div>
                	<input id="button" type="submit" name="formSubmit" value="Buy Now!" />
                </form>
                
		</div><!-- END of panel -->
		
		<div id="stage">
		
			<div id="screen">
			
           		<h1>Price: </h1><h1></h1>
           		<h1>Please choose at least 1 ticket!</h1>
           		
			</div><!-- END of screen -->
			
		</div><!-- END of stage -->
		
		<div id="seats">
		
            <?php
            $seats = array(
                'A-1' => "<a id='A-1' class='A' href='#'><img src='img/A1.png'/></a>",
                'A-2' => "<a id='A-2' class='A' href='#'><img src='img/A1.png'/></a>",
                'A-3' => "<a id='A-3' class='A' href='#'><img src='img/A1.png'/></a>",
                'A-4' => "<a id='A-4' class='A' href='#'><img src='img/A1.png'/></a>",
                'A-5' => "<a id='A-5' class='A' href='#'><img src='img/A1.png'/></a>",
                'B-1' => "<a id='B-1' class='B' href='#'><img src='img/A1.png'/></a>",
                'B-2' => "<a id='B-2' class='B' href='#'><img src='img/A1.png'/></a>",
                'B-3' => "<a id='B-3' class='B' href='#'><img src='img/A1.png'/></a>",
                'B-4' => "<a id='B-4' class='B' href='#'><img src='img/A1.png'/></a>",
                'B-5' => "<a id='B-5' class='B' href='#'><img src='img/A1.png'/></a>",
                'C-1' => "<a id='C-1' class='C' href='#'><img src='img/A1.png'/></a>",
                'C-2' => "<a id='C-2' class='C' href='#'><img src='img/A1.png'/></a>",
                'C-3' => "<a id='C-3' class='C' href='#'><img src='img/A1.png'/></a>",
                'C-4' => "<a id='C-4' class='C' href='#'><img src='img/A1.png'/></a>",
                'C-5' => "<a id='C-5' class='C' href='#'><img src='img/A1.png'/></a>"
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