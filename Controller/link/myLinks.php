<?php
header("Access-Control-Allow-Origin: *");
include "../../Model/PDO.php";
include "../../Model/modele.php";

$login = (isset($_GET["login"])) ? $_GET["login"] : NULL;
$user = new UsersManager($pdo);
$id_current = $user->findUserByLogin($login);
$post = new PostsManager($pdo);
$userPosts = $post->findAllPostsByUser($id_current);
echo $login;
echo ";";
for ($i = 0; $i < count($userPosts); $i++) {
    echo $userPosts[$i]['post_description'];
    echo ";";
    echo $userPosts[$i]['post_title'];
    echo ";";
    echo $userPosts[$i]['post_created_time'];
    echo ";";
    echo $userPosts[$i]['post_url'];
    echo ";";
}
?>