<?php
    header("Access-Control-Allow-Origin: *");
    include "../../Model/PDO.php";
    include "../../Model/modele.php";

    $post = new PostsManager($pdo);
    $user = new UsersManager($pdo);
    $results = $post->findAllPosts();
    for($i=0 ; $i < count($results); $i++) {
        echo $results[$i]['post_description'];
        echo ";";
        echo $results[$i]['post_title'];
        echo ";";
        echo $results[$i]['post_created_time'];
        echo ";";
        echo $results[$i]['post_url'];
        echo ";";
        echo $user->findUserById($results[$i]['post_creator']);
        echo ";";
    }
?>