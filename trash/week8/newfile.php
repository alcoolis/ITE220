           
 <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=Cp1252">
<title>Insert title here</title>

<link rel="stylesheet" href="css/styletest.css">

</head>
<body>          
           
            <?php
            $seats = array(
                'A-1' => "<input type='checkbox' name='seats[]' value='A-1'>",
                'A-2' => "<input type='checkbox' name='seats[]' value='A-2'>",
                'A-3' => "<input type='checkbox' name='seats[]' value='A-3'>",
                'A-4' => "<input type='checkbox' name='seats[]' value='A-4'>",
                'A-5' => "<input type='checkbox' name='seats[]' value='A-5'>",
                'B-1' => "<input type='checkbox' name='seats[]' value='B-1'>",
                'B-2' => "<input type='checkbox' name='seats[]' value='B-2'>",
                'B-3' => "<input type='checkbox' name='seats[]' value='B-3'>",
                'B-4' => "<input type='checkbox' name='seats[]' value='B-4'>",
                'B-5' => "<input type='checkbox' name='seats[]' value='B-5'>",
                'C-1' => "<input type='checkbox' name='seats[]' value='C-1'>",
                'C-2' => "<input type='checkbox' name='seats[]' value='C-2'>",
                'C-3' => "<input type='checkbox' name='seats[]' value='C-3'>",
                'C-4' => "<input type='checkbox' name='seats[]' value='C-4'>",
                'C-5' => "<input type='checkbox' name='seats[]' value='C-5'>",
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
            
/*result2.php?seats%5B%5D=A-3&seats%5B%5D=A-4
            
            echo <<<_END
            
            <form method="post" action="result2.php" id="form1">
            <a href="result2.php?seats%5B%5D=A-3&seats%5B%5D=A-4" onclick="document.getElementById('form1').submit(); return false;">Hyperlink</a>
            </form>
_END;
*/
            echo " <input type='submit' value='Submit'>";
           echo " </form>";

            ?>
            
            
            
            
</body>
</html>