<?php include "../registration/connection.php"?>

<?php 
session_start();
$user_email = $_SESSION['email'];
if($user_email === "admin@admin.com"){
    $query = "SELECT * FROM users";
    $retrieve = $connection->query($query);
    $dataBase = $retrieve->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($dataBase);
    
}
else{
    $query = "SELECT fname,sname,tname,famname,email,phone FROM users WHERE email = '$user_email'";
    $retrieve = $connection->query($query);
    $dataBase = $retrieve->fetch(PDO::FETCH_ASSOC);
    echo json_encode($dataBase);
}
?>