<?php
    header("Access-Control-Allow-Origin: *");
    include "../../Model/PDO.php";
    include "../../Model/modele.php";

    $login = (isset($_GET["login"])) ? $_GET["login"] : NULL;
    $email = (isset($_GET["email"])) ? $_GET["email"] : NULL;
    $password = (isset($_GET["password"])) ? $_GET["password"] : NULL;
    $date = date('Y/m/d H:i:s');

    $user = new UsersManager($pdo);

    $existByLogin = $user->findUserByLogin($login);
    $existByEmail = $user->findUserByEmail($email);
    if($existByLogin == "" && $existByEmail == "") {
        $id_current = $user->add($login, $password, $email, $date);
        echo $id_current;
        echo " ";
        echo $login;
        echo " ";
        echo $password;
    } else if($existByLogin != "") {
        echo "login";
    } else {
        echo "email";
    }
?>