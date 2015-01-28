<?php
    header("Access-Control-Allow-Origin: *");
    include "../../Model/PDO.php";
    include "../../Model/modele.php";

    $post = new PostsManager($pdo);
    $results = $post->findAllPosts();
    for($i=0 ; $i < count($results); $i++) {
        echo $results[$i]['post_title'];
        echo ";";
    }
?>