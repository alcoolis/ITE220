<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=Cp1252">
<title>Insert title here</title>

<link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
<link rel="stylesheet" href="css/styletest.css">

<link href='https://fonts.googleapis.com/css?family=Chewy' rel='stylesheet' type='text/css'>
<link href='https://fonts.googleapis.com/css?family=Architects+Daughter' rel='stylesheet' type='text/css'>


<script src="js/jquery.js"></script>

<script src="js/app2.js"></script>

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
    
                <a id='button' href='result.php'>Buy Now!</a>
                
		</div><!-- END of panel -->
		
		<div id="stage">
		
			<div id="screen">
			
           		<h1>Price: </h1><h1></h1><h1>Please choose at least 1 ticket!</h1>
			</div><!-- END of screen -->
			
		</div><!-- END of stage -->
		
		<div id="seats">
		
            <?php
            $seats = array(
                'A-1' => "<input class='customInputCheckbox A' type='checkbox' name='seats[]' value='A-1'>",
                'A-2' => "<input class='customInputCheckbox A' type='checkbox' name='seats[]' value='A-2'>",
                'A-3' => "<input class='customInputCheckbox A' type='checkbox' name='seats[]' value='A-3'>",
                'A-4' => "<input class='customInputCheckbox A' type='checkbox' name='seats[]' value='A-4'>",
                'A-5' => "<input class='customInputCheckbox A' type='checkbox' name='seats[]' value='A-5'>",
                'B-1' => "<input class='customInputCheckbox B' type='checkbox' name='seats[]' value='B-1'>",
                'B-2' => "<input class='customInputCheckbox B' type='checkbox' name='seats[]' value='B-2'>",
                'B-3' => "<input class='customInputCheckbox B' type='checkbox' name='seats[]' value='B-3'>",
                'B-4' => "<input class='customInputCheckbox B' type='checkbox' name='seats[]' value='B-4'>",
                'B-5' => "<input class='customInputCheckbox B' type='checkbox' name='seats[]' value='B-5'>",
                'C-1' => "<input class='customInputCheckbox C' type='checkbox' name='seats[]' value='C-1'>",
                'C-2' => "<input class='customInputCheckbox C' type='checkbox' name='seats[]' value='C-2'>",
                'C-3' => "<input class='customInputCheckbox C' type='checkbox' name='seats[]' value='C-3'>",
                'C-4' => "<input class='customInputCheckbox C' type='checkbox' name='seats[]' value='C-4'>",
                'C-5' => "<input class='customInputCheckbox C' type='checkbox' name='seats[]' value='C-5'>",
            );
            $counter = 0;
            
            echo "<form action='result2.php' method='post'>";
            
            foreach ($seats as $item)
            {
                echo $item;
            
                $counter ++;
            
                if ($counter % 5 == 0)
                    echo "<br>";
            }            
            
            echo " <input type='submit' value='Submit'>";
            echo " </form>";

            ?>
            
    	</div><!-- END of seats -->
	</div><!-- END of content -->

</body>
</html>