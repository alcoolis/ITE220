<?php
session_start();

$request=$_GET['q'];

if($request=="login")
{
    $username = $_POST["login-username"];
    $password = $_POST["login-password"];
    if($username == "admin" && $password=="1234")
    {
        $_SESSION["username"] = $username;
        
        header("location:welcome.php");
    }
    else
    {
        header("location:index.php?q=error");
    }
}
else if($request=="logout")
{
    session_destroy();
    header("location:index.php");
}


?>