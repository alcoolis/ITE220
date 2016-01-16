<?php

$selectedSeats = $_POST["seats"];

echo "You have bought " . count($selectedSeats) . " seat(s)!<br/>";

$totalPrice=0;

foreach ($selectedSeats as $item)
{
    $price=0;
    
    if($item[0]=="A")
    {
        $price=3000;
    }
    else if ($item[0]=="B")
    {
        $price=2000;
    }
    else
    {
        $price=1000;
    }
        echo $item.'  price:'.$price."<br/>";
        
    $totalPrice+=$price;
}
echo "Total price: ".$totalPrice;
?>