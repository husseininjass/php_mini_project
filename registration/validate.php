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
    $userInfo = [$firstName , $secondName , $thirdName , $familyName , $email , $password , $confrimPss , $phone , $birthDate];
    foreach($userInfo as $input){
        if(empty($input)){
            exit('cannot be empty');
        }
    }
    $phone_filter = "/^\d{14}$/";
    if(!preg_match($phone_filter , $phone)){
        exit();
    }
    
    $email_filter =  filter_var($email, FILTER_SANITIZE_EMAIL);
    if (!filter_var($email_filter, FILTER_VALIDATE_EMAIL)) {
        exit();
    } 

    $pattern_name = "/^[A-Za-z]+$/";
    $names = [$firstName , $secondName , $thirdName , $familyName];
    foreach($names as $name){
        if(!preg_match($pattern_name , $name)){
            exit();
        }
    }

    $pattern_password = "/(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/";
    if(!preg_match($pattern_password , $password)){
        exit();
    }
    $query = "INSERT INTO users(fname , sname , tname , famname ,password, email , phone , birth) 
    VALUES ('$firstName' , '$secondName' , '$thirdName' , '$familyName' , '$password','$email' ,'$phone' , '$birthDate' ) ";
    $connection->exec($query);
    
    header("Location: login2.php");
    
}

?>