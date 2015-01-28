<?php
header("Access-Control-Allow-Origin: *");
include "../../Model/PDO.php";
include "../../Model/modele.php";

$login = (isset($_GET["login"])) ? $_GET["login"] : NULL;
$cond1 = (isset($_GET["cond1"])) ? $_GET["cond1"] : NULL;
$cond2 = (isset($_GET["cond2"])) ? $_GET["cond2"] : NULL;

switch ($cond1) {
    case "Tag" :
        //$post = new PostsManager($pdo);
        $post_tag = new PostTagsManager($pdo);
        $posts = $post_tag->findPostsByTag($cond2);
        echo $login;
        echo ";";
        echo $cond1;
        echo ";";
        for ($i = 0; $i < count($posts); $i++) {
            echo $posts[$i]['post_description'];
            echo ";";
            echo $posts[$i]['post_title'];
            echo ";";
            echo $posts[$i]['post_created_time'];
            echo ";";
            echo $posts[$i]['post_url'];
            echo ";";
        }
        break;
    case "User" :
        $user = new UsersManager($pdo);
        $id_current = $user->findUserByLogin($cond2);
        $post = new PostsManager($pdo);
        $userPosts = $post->findAllPostsByUser($id_current);
        echo $login;
        echo ";";
        echo $cond1;
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
        break;
    case "Group" :
        $group = new GroupsManager($pdo);
        $groupNmae = $group->findGroupsByName($cond2);
        echo $login;
        echo ";";
        echo $cond1;
        echo ";";
        echo $groupNmae;
        break;
    case "Log" :
        $log = new LogsManager($pdo);
        $logs = $log->findLogByMessage($cond2);
        echo $login;
        echo ";";
        echo $cond1;
        echo ";";
        for ($i = 0; $i < count($logs); $i++) {
            echo $logs[$i]['message'];
            echo ";";
            echo $logs[$i]['log_time'];
            echo ";";
        }
        break;
    case "Keywords" :
        $post = new PostsManager($pdo);
        $userPosts = $post->findPostByKeyword($cond2);
        echo $login;
        echo ";";
        echo $cond1;
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
    default:
        break;

}
?>