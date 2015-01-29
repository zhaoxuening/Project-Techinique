<?php
header("Access-Control-Allow-Origin: *");
include "../../Model/PDO.php";
include "../../Model/modele.php";
$login = (isset($_GET["login"])) ? $_GET["login"] : NULL;
$user = new UsersManager($pdo);
$id_current = $user->findUserByLogin($login);
$group = new GroupsManager($pdo);
$groupsOfUser = $group->findGroupsByUser($id_current);
echo $login;
echo ";";
echo $groupsOfUser;
?>