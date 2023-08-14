<?php 
if (isset($_POST['email']) && isset($_POST['password'])) {
    $email = $_POST['email'];
    $password = $_POST['password'];
    session_start();
    $_SESSION['email'] = $email;
    $_SESSION['password'] = $password;
    
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h2 class="fs-1 text-center mt-5">Log In</h2>
    <form action="<?= htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post" class="text-center mt-lg-5">
        <div class="mb-5">
            <label for="" class="d-block">E-mail</label>
            <input type="email" class="w-25 email" name="email">
            
        </div>
        <div class="mb-5">
            <label for="" class="d-block">Password</label>
            <input type="password" class="w-25 password" name="password">
            <p class="text" style="color: red;font-size: 15px;"></p>
        </div>
        <input type="submit" value="login" class="p-2 sub" name="submit">
    </form>
</body>
<script src="login.js"></script>
</html>