<?php
header("Access-Control-Allow-Origin: *");
include "../../Model/PDO.php";
include "../../Model/modele.php";
$login = (isset($_GET["login"])) ? $_GET["login"] : NULL;
$password = (isset($_GET["password"])) ? $_GET["password"] : NULL;
$user = new UsersManager($pdo);
$id_current = $user->checkLoginPw($login, $password);

$log = new LogsManager($pdo);

$user_IP = ($_SERVER["HTTP_VIA"]) ? $_SERVER["HTTP_X_FORWARDED_FOR"] : $_SERVER["REMOTE_ADDR"];
$user_IP = ($user_IP) ? $user_IP : $_SERVER["REMOTE_ADDR"];
$date = date('Y/m/d H:i:s');
$message = "User " . $login . " @" .$user_IP . " was connected.";
$log->add($message, $date);

echo $id_current;
echo " ";
echo $login;
echo " ";
echo $password;
?>