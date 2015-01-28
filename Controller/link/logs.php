<?php
header("Access-Control-Allow-Origin: *");
include "../../Model/PDO.php";
include "../../Model/modele.php";
$login = (isset($_GET["login"])) ? $_GET["login"] : NULL;
//$user = new UsersManager($pdo);
//$id_current = $user->findUserByLogin($login);
//$group = new GroupsManager($pdo);
//$groupsOfUser = $group->findGroupsByUser($id_current);
//echo $login;
//echo ",";
//echo $groupsOfUser;

$log = new LogsManager($pdo);
$logs = $log->findAllLogs();

echo $login;
echo ";";

for ($i = 0; $i < count($logs); $i++) {
    echo $logs[$i]['message'];
    echo ";";
    echo $logs[$i]['log_time'];
    echo ";";
}

?>