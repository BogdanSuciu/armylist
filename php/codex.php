<?php
header("Content-Type: application/json; charset=UTF-8");

include 'init.php';

$result = $conn->query("SELECT id, name FROM codex");
$rs = array("records" => array($result->fetch_array(MYSQLI_ASSOC)));
$conn->close();
echo json_encode($rs, JSON_PRETTY_PRINT);
?>