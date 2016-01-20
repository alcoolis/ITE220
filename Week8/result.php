<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=Cp1252">
<title>Insert title here</title>

<link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
<link rel="stylesheet" href="css/style.css">

<link href='https://fonts.googleapis.com/css?family=Chewy'
	rel='stylesheet' type='text/css'
>
<link href='https://fonts.googleapis.com/css?family=Architects+Daughter'
	rel='stylesheet' type='text/css'
>


<script src="js/jquery.js"></script>
<script src="js/app.js"></script>

</head>
<body>

	<div id=stagePage2>
		<div id="screen">
<?php
$selectedSeats = $_POST["seats"];
sort($selectedSeats);
$totalPrice = 0;
$luckyTicket = luckyTicket();
$seat="seats";
$lines="";

if(count($selectedSeats)===1)
{
    $seat="seat";
    $lines="</br>";
}
if(count($selectedSeats)===1)
{
    
}
switch (count($selectedSeats))
{
    case 1:
    $seat="seat";
    $lines="</br></br></br>";
    break;
    case 2:
    $lines="</br></br>";
    break;
    case 3:
    $lines="</br>";
    break;
        
}



echo "$lines *The Lucky Ticket is the ticket " . $luckyTicket . "*</br>";
echo "<h2>You have bought " . count($selectedSeats) . " $seat!</h2></br>";

foreach ($selectedSeats as $item)
{
    $price = 0;
    $flag = false;
    
    if ($item === $luckyTicket)
    {
        if ($item[0] == "A")
        {
            $price = 1500;
        } else 
            if ($item[0] == "B")
            {
                $price = 1000;
            } else
            {
                $price = 500;
            }
        
        $flag = true;
    } else 
        if ($item[0] == "A")
        {
            $price = 3000;
        } else 
            if ($item[0] == "B")
            {
                $price = 2000;
            } else
            {
                $price = 1000;
            }
    
    printPrice($item, $price, $flag);
    $totalPrice += $price;
}

echo "<h2><span id='totalPrice'>Total price: " . $totalPrice ."</span></h2>";

?>

		</div><!-- END of screen -->
	</div><!-- END of stage -->

</body>
</html>




<?php

function luckyTicket()
{
    $lettreNum = rand(1, 3);
    $lettre = "";
    
    switch ($lettreNum)
    {
        case 1:
            $lettre = 'A';
            break;
        case 2:
            $lettre = 'B';
            break;
        case 3:
            $lettre = 'C';
            break;
    }
    
    $lettreNum = rand(1, 5);
    $lettre .= "-" . $lettreNum;
    
    return $lettre;
}

function printPrice($item, $price, $flag)
{
    if ($flag)
    {
        echo $item . '  price:' . $price . "<br/>";
        echo "<span id='congartsMsg'>Congratsulations! you won the lucky draw ticket.</br>The seat price of $item is 50% off!</span><br/>";
    } else
        echo $item . '  price:' . $price . "<br/>";
}
?>
