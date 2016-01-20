<!DOCTYPE html>
<html >
  <head>
    <meta charset="UTF-8">
    <title>Material Login Form</title>
    <link rel="stylesheet" href="css/reset.css">
    <link rel='stylesheet prefetch' href='http://fonts.googleapis.com/css?family=Roboto:400,100,300,500,700,900|RobotoDraft:400,100,300,500,700,900'>
    <link rel='stylesheet prefetch' href='http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css'>
    <link rel="stylesheet" href="css/style.css">
  </head>

  <body>

    
    <!-- Mixins-->
    <!-- Pen Title-->
    <div class="pen-title">
      <h1>Login Form</h1><span>Week 9 <i class='fa fa-code'></i> ITE220: Web Development II  </span>
    </div>
    <div class="container">
      <div class="card"></div>
      <div class="card">
      <div class="input-container">
      <label for="error">
            <?php
                if(isset($_GET['q']))
                {
                    $request=$_GET['q'];

                    if($request=="error")
                        echo "Invalid username or password!";
                }
            ?>
            </label>
            </div>
        <h1 class="title">Login</h1>
        <form action="action.php?q=login" method="post">
          <div class="input-container">
            <input type="text" name="login-username" required="required"/>
            <label for="Username">Username</label>
            <div class="bar"></div>
          </div>
          <div class="input-container">
            <input type="password" name="login-password" required="required"/>
            <label for="Password">Password</label>
            <div class="bar"></div>
          </div>
          <div class="button-container">
            <button><span>Go</span></button>
          </div>
        </form>
      </div>
      <div class="card alt">
        <div class="toggle"></div>
        <h1 class="title">Register
          <div class="close"></div>
        </h1>
        <form>
          <div class="input-container">
            <input type="text" id="register-username" required="required"/>
            <label for="Username">Username</label>
            <div class="bar"></div>
          </div>
          <div class="input-container">
            <input type="password" id="register-password" required="required"/>
            <label for="Password">Password</label>
            <div class="bar"></div>
          </div>
          <div class="input-container">
            <input type="password" id="register-repeat-password" required="required"/>
            <label for="Repeat Password">Repeat Password</label>
            <div class="bar"></div>
          </div>
          <div class="button-container">
            <button><span>Next</span></button>
          </div>
        </form>
      </div>
    </div>
    <!-- Portfolio--><a id="portfolio" href="http://andytran.me/" title="View my portfolio!"><i class="fa fa-link"></i></a>
    <!-- CodePen--><a id="codepen" href="http://codepen.io/andytran/" title="Follow me!"><i class="fa fa-codepen"></i></a>
        <script src='js/jquery.min.js'></script>
        <script src="js/index.js"></script>
  </body>
</html>



