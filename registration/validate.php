<?php include "connection.php" ?>

<?php 
if($_SERVER['REQUEST_METHOD'] === 'POST'){
    $firstName = htmlspecialchars($_POST['firstname']);
    $secondName = htmlspecialchars($_POST['secondname']);
    $thirdName = htmlspecialchars($_POST['thirdname']);
    $familyName = htmlspecialchars($_POST['familyname']);
    $email = htmlspecialchars($_POST['email']);
    $password = htmlspecialchars($_POST['password']);
    $confrimPss = htmlspecialchars($_POST['cpassword']);
    $phone = htmlspecialchars($_POST['phone']);
    $birthDate = htmlspecialchars($_POST['birth']);
    
    // $query = "INSERT INTO users(fname , sname , tname , famname ,password, email , phone , birth) 
    // VALUES ('$firstName' , '$secondName' , '$thirdName' , '$familyName' , '$password','$email' ,'$phone' , '$birthDate' ) ";
    // $connection->exec($query);
    
}



?>