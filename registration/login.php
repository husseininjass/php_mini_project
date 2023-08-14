<?php include "connection.php" ?>
<?php 
if($_SERVER['REQUEST_METHOD'] === 'POST'){
   

    
    // session_start();
    // $_SESSION['email'] = $user_email;
    // $_SESSION['password'] = $user_password;


    $query = "SELECT * FROM users";
    $retrieve = $connection->query($query);
    $dataBase = $retrieve->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($dataBase);
    // header("Location: login.html");
}
?>