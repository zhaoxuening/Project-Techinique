<?php
    header("Access-Control-Allow-Origin: *");
    include "../../Model/PDO.php";
    include "../../Model/modele.php";

    $login = (isset($_GET["login"])) ? $_GET["login"] : NULL;
    $email = (isset($_GET["email"])) ? $_GET["email"] : NULL;
    $password = (isset($_GET["password"])) ? $_GET["password"] : NULL;
    $date = date('Y/m/d H:i:s');

    $user = new UsersManager($pdo);
    $log = new LogsManager($pdo);

    $existByLogin = $user->findUserByLogin($login);
    $existByEmail = $user->findUserByEmail($email);

    $user_IP = ($_SERVER["HTTP_VIA"]) ? $_SERVER["HTTP_X_FORWARDED_FOR"] : $_SERVER["REMOTE_ADDR"];
    $user_IP = ($user_IP) ? $user_IP : $_SERVER["REMOTE_ADDR"];
    if($existByLogin == "" && $existByEmail == "") {
        $id_current = $user->add($login, $password, $email, $date);

        $message = "User " . $login . " @" .$user_IP . " was created.";
        $log->add($message, $date);
        echo $id_current;
        echo " ";
        echo $login;
        echo " ";
        echo $password;
    } else if($existByLogin != "") {
        $message = "User " . $login . " @". $user_IP . " has already created. ";
        $log->add($message,$date);
        echo "login";
    } else {
        $message = "User " . $login . " @". $user_IP . " use a e-mail existed. ";
        $log->add($message,$date);
        echo "email";
    }
?>