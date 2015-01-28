<?php
header("Access-Control-Allow-Origin: *");
include "../../Model/PDO.php";
include "../../Model/modele.php";
$login = (isset($_GET["login"])) ? $_GET["login"] : NULL;
$user = new UsersManager($pdo);
$id_current = $user->findUserByLogin($login);
$tag = new TagsManager($pdo);
$userTags = $tag->findTagsByUser($id_current);
$userTagsParent = $tag->findTagsParentByUser($id_current);
$tagParent = $tag->findTagById($userTagsParent);
echo $login;
echo ";";
echo $userTags;
echo ";";
echo $tagParent;
echo ";";

?>