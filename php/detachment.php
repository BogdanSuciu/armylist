<?php
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: http://armylist:1011");

include 'init.php';

$result = $conn->query("SELECT * FROM force_types");

$output = array("records" => "");
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if(isset($_GET['id']) && $_GET['id'] == $rs["id"]) {
      $output["records"] = $rs;
    }
}
echo json_encode($output, JSON_PRETTY_PRINT);
$conn->close();
?>