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
// addTag
$tags = new TagsManager($pdo);
$tagParents = $tags->findTagByName("void");
$tags->add($tag, $tagParents);
// add post_tag
$idPost = $post->findPostByName($title);
$idTag = $tags->findTagByName($tag);
$post_tags = new PostTagsManager($pdo);
$post_tags->add($idPost, $idTag);
// add log in database
$log = new LogsManager($pdo);
$user_IP = ($_SERVER["HTTP_VIA"]) ? $_SERVER["HTTP_X_FORWARDED_FOR"] : $_SERVER["REMOTE_ADDR"];
$user_IP = ($user_IP) ? $user_IP : $_SERVER["REMOTE_ADDR"];

$message = "User " . $creator . " @" . $user_IP . " create a new post \"". $title ."\".";
$log->add($message, $date);

$messageTag = "User " . $creator . " @" . $user_IP . " create a new tag \"". $tag ."\" and its tagParent is \"".$tagParents."\".";
$log->add($messageTag, $date);
?>
