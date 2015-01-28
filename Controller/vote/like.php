<?php
   header("Access-Control-Allow-Origin: *");
   include "../../Model/PDO.php";
   include "../../Model/modele.php"; 
   $login = (isset($_GET["login"])) ? $_GET["login"] : NULL;
   $password = (isset($_GET["password"])) ? $_GET["password"] : NULL;
   $user = new UsersManager($pdo);
   $id_current = $user->checkLoginPw($login, $password);
   echo $id_current;
   echo " ";
   echo $login;
   echo " ";
   echo $password;
?>