<?php
    header("Access-Control-Allow-Origin: *");
    include "../../Model/PDO.php";
    include "../../Model/modele.php";
    $address = (isset($_GET["address"])) ? $_GET["address"] : NULL;
    $title = (isset($_GET["title"])) ? $_GET["title"] : NULL;
    $description = (isset($_GET["description"])) ? $_GET["description"] : NULL;
    $type = (isset($_GET["type"])) ? $_GET["type"] : NULL;
    $priorite = (isset($_GET["priorite"])) ? $_GET["priorite"] : NULL;
    $tag = (isset($_GET["tags"])) ? $_GET["tags"] : NULL;
    $creator = (isset($_GET["creator"])) ? $_GET["creator"] : NULL;
    $date = date('Y/m/d H:i:s');

    // addLink
    $post = new PostsManager($pdo);

    $post->add($address, $title, $description, $type, intval($priorite), $date, intval($creator));
    $idPost = $pdo->lastInsertId();
    echo $idPost;
    echo ";";

    // addTags and post_tags
    $tags = new TagsManager($pdo);
    $post_tags = new PostTagsManager($pdo);
    $tags_tab = explode("," , $tag);

    for($i=0 ; $i < count($tags_tab); $i++) {
        $tagParent = $tags->findTagByName("default_parent");
        $exist = $tags->findTagByName($tags_tab[$i]);
        echo $exist;
        if($exist == "") {
            $tags->add($tags_tab[$i], $tagParent);
            $idTag = $tags->findTagByName($tags_tab[$i]);
        } else {
            $idTag = $exist;
        }
        $post_tags->add($idPost, $idTag);
    }
?>
