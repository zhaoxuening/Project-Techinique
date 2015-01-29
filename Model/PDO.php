<?php
header("Access-Control-Allow-Origin: *");

$pdo = new PDO('mysql:host=localhost;dbname=social_bookmarks', 'root', '', array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
$pdo->query("SET NAMES UTF8");
?>
